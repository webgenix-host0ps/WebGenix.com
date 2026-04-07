#!/bin/bash
# =============================================================================
# Zammad Backup & Restore Procedures
# =============================================================================
# This script documents how to back up and restore your Zammad installation.
# Run individual sections manually as needed.
# =============================================================================

set -euo pipefail

COMPOSE_FILE="docker-compose.yml"
BACKUP_DIR="./zammad-backups-local"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# =============================================================================
# BACKUP (manual trigger — automated backup runs daily at 03:00 via container)
# =============================================================================

backup() {
  echo "▶ Starting manual Zammad backup..."
  mkdir -p "$BACKUP_DIR"

  # 1. PostgreSQL dump
  echo "  → Dumping PostgreSQL..."
  docker compose exec zammad-postgresql \
    pg_dump -U zammad zammad_production \
    > "$BACKUP_DIR/zammad_db_$TIMESTAMP.sql"

  # 2. File attachments (storage volume)
  echo "  → Archiving storage volume..."
  docker run --rm \
    -v zammad-storage:/storage:ro \
    -v "$(pwd)/$BACKUP_DIR":/backup \
    alpine \
    tar czf "/backup/zammad_storage_$TIMESTAMP.tar.gz" -C /storage .

  echo "✅ Backup complete → $BACKUP_DIR"
  ls -lh "$BACKUP_DIR"
}

# =============================================================================
# RESTORE
# =============================================================================

restore() {
  local DB_DUMP="$1"       # path to .sql file
  local STORAGE_ARCHIVE="$2"  # path to .tar.gz file

  if [[ -z "$DB_DUMP" || -z "$STORAGE_ARCHIVE" ]]; then
    echo "Usage: $0 restore <db_dump.sql> <storage_archive.tar.gz>"
    exit 1
  fi

  echo "▶ Starting Zammad restore..."
  echo "  DB dump:   $DB_DUMP"
  echo "  Storage:   $STORAGE_ARCHIVE"
  echo ""
  read -p "⚠️  This will OVERWRITE your current Zammad data. Continue? [y/N] " confirm
  [[ "$confirm" == "y" || "$confirm" == "Y" ]] || { echo "Aborted."; exit 0; }

  # Step 1 — Stop all Zammad containers (keep DB running for restore)
  echo "  → Stopping Zammad services..."
  docker compose stop \
    zammad-railsserver \
    zammad-websocket \
    zammad-scheduler \
    zammad-nginx \
    zammad-backup

  # Step 2 — Drop and recreate the database
  echo "  → Dropping existing database..."
  docker compose exec zammad-postgresql \
    psql -U zammad -c "DROP DATABASE IF EXISTS zammad_production;"
  docker compose exec zammad-postgresql \
    psql -U zammad -c "CREATE DATABASE zammad_production OWNER zammad;"

  # Step 3 — Restore PostgreSQL dump
  echo "  → Restoring database from $DB_DUMP..."
  docker compose exec -T zammad-postgresql \
    psql -U zammad zammad_production < "$DB_DUMP"

  # Step 4 — Restore file attachments
  echo "  → Restoring storage volume from $STORAGE_ARCHIVE..."
  docker run --rm \
    -v zammad-storage:/storage \
    -v "$(pwd)":/backup:ro \
    alpine \
    sh -c "rm -rf /storage/* && tar xzf /backup/$STORAGE_ARCHIVE -C /storage"

  # Step 5 — Restart everything
  echo "  → Restarting Zammad..."
  docker compose up -d

  echo "✅ Restore complete. Zammad is starting up at http://localhost:8090"
  echo "   (Allow 60-90 seconds for full startup)"
}

# =============================================================================
# SETUP — copy SSL bypass initializer into the volume (first run)
# =============================================================================

setup_ssl_bypass() {
  echo "▶ Installing SSL bypass initializer..."

  # Copy the Ruby initializer into the named volume
  docker run --rm \
    -v zammad-initializers:/target \
    -v "$(pwd)/omniauth_ssl_bypass.rb":/src/omniauth_ssl_bypass.rb:ro \
    alpine \
    cp /src/omniauth_ssl_bypass.rb /target/omniauth_ssl_bypass.rb

  echo "✅ Initializer installed. Restart zammad-railsserver to apply:"
  echo "   docker compose restart zammad-railsserver"
}

# =============================================================================
# Entry point
# =============================================================================

case "${1:-}" in
  backup)  backup ;;
  restore) restore "${2:-}" "${3:-}" ;;
  setup-ssl-bypass) setup_ssl_bypass ;;
  *)
    echo "Zammad Backup & Restore Tool"
    echo ""
    echo "Commands:"
    echo "  backup                          — Create a full backup (DB + storage)"
    echo "  restore <db.sql> <storage.tgz> — Restore from backup files"
    echo "  setup-ssl-bypass                — Install dev SSL bypass initializer"
    echo ""
    echo "Examples:"
    echo "  bash zammad-ops.sh backup"
    echo "  bash zammad-ops.sh restore ./zammad-backups-local/zammad_db_20260405.sql ./zammad-backups-local/zammad_storage_20260405.tar.gz"
    echo "  bash zammad-ops.sh setup-ssl-bypass"
    ;;
esac
