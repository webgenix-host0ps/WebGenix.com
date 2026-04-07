CREATE TYPE "public"."sender_role" AS ENUM('client', 'support', 'admin');--> statement-breakpoint
CREATE TYPE "public"."ticket_department" AS ENUM('technical', 'billing', 'sales', 'general', 'partnerships');--> statement-breakpoint
CREATE TYPE "public"."ticket_priority" AS ENUM('low', 'normal', 'high', 'urgent');--> statement-breakpoint
CREATE TYPE "public"."ticket_source" AS ENUM('web', 'email', 'api', 'slack', 'whatsapp');--> statement-breakpoint
CREATE TYPE "public"."ticket_status" AS ENUM('open', 'in_progress', 'resolved', 'closed', 'pending_customer', 'pending_third_party');--> statement-breakpoint
CREATE TABLE "email_parsing_rules" (
	"id" serial PRIMARY KEY NOT NULL,
	"inbound_email" varchar(255) NOT NULL,
	"forward_to_department" "ticket_department",
	"default_priority" "ticket_priority" DEFAULT 'normal',
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "email_parsing_rules_inbound_email_unique" UNIQUE("inbound_email")
);
--> statement-breakpoint
CREATE TABLE "kb_articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"category" varchar(100),
	"tags" text[],
	"author_id" varchar(255) NOT NULL,
	"views" integer DEFAULT 0,
	"helpful" integer DEFAULT 0,
	"not_helpful" integer DEFAULT 0,
	"is_published" boolean DEFAULT false,
	"published_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "kb_articles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "kb_feedback" (
	"id" serial PRIMARY KEY NOT NULL,
	"article_id" serial NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"helpful" boolean NOT NULL,
	"comment" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "sla_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"ticket_id" serial NOT NULL,
	"policy_id" serial NOT NULL,
	"breached_type" varchar(20) NOT NULL,
	"breached_at" timestamp DEFAULT now() NOT NULL,
	"notified_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "sla_policies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"priority" "ticket_priority" NOT NULL,
	"department" "ticket_department",
	"response_time_minutes" integer NOT NULL,
	"resolution_time_minutes" integer NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "ticket_assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"ticket_id" serial NOT NULL,
	"assigned_to" varchar(255) NOT NULL,
	"assigned_by" varchar(255) NOT NULL,
	"assigned_at" timestamp DEFAULT now() NOT NULL,
	"is_current" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "ticket_attachments" (
	"id" serial PRIMARY KEY NOT NULL,
	"message_id" serial NOT NULL,
	"file_name" text NOT NULL,
	"file_size" integer,
	"mime_type" varchar(100),
	"s3_key" text NOT NULL,
	"uploaded_by" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ticket_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"ticket_id" serial NOT NULL,
	"sender" varchar(255) NOT NULL,
	"sender_role" "sender_role" NOT NULL,
	"body" text NOT NULL,
	"is_internal" boolean DEFAULT false,
	"attachments" jsonb DEFAULT '[]'::jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ticket_status_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"ticket_id" serial NOT NULL,
	"old_status" "ticket_status",
	"new_status" "ticket_status" NOT NULL,
	"changed_by" varchar(255) NOT NULL,
	"changed_at" timestamp DEFAULT now() NOT NULL,
	"comment" text
);
--> statement-breakpoint
CREATE TABLE "ticket_webhooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"events" text[] NOT NULL,
	"secret" varchar(255),
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "tickets" (
	"id" serial PRIMARY KEY NOT NULL,
	"ticket_id" varchar(20) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"subject" text NOT NULL,
	"description" text NOT NULL,
	"department" "ticket_department" DEFAULT 'technical',
	"priority" "ticket_priority" DEFAULT 'normal',
	"status" "ticket_status" DEFAULT 'open',
	"source" "ticket_source" DEFAULT 'web',
	"assigned_to" varchar(255),
	"tags" text[],
	"first_response_at" timestamp,
	"resolved_at" timestamp,
	"closed_at" timestamp,
	"csat_rating" integer,
	"csat_comment" text,
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tickets_ticket_id_unique" UNIQUE("ticket_id")
);
--> statement-breakpoint
ALTER TABLE "kb_feedback" ADD CONSTRAINT "kb_feedback_article_id_kb_articles_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."kb_articles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sla_logs" ADD CONSTRAINT "sla_logs_ticket_id_tickets_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sla_logs" ADD CONSTRAINT "sla_logs_policy_id_sla_policies_id_fk" FOREIGN KEY ("policy_id") REFERENCES "public"."sla_policies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ticket_assignments" ADD CONSTRAINT "ticket_assignments_ticket_id_tickets_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ticket_attachments" ADD CONSTRAINT "ticket_attachments_message_id_ticket_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "public"."ticket_messages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ticket_messages" ADD CONSTRAINT "ticket_messages_ticket_id_tickets_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ticket_status_history" ADD CONSTRAINT "ticket_status_history_ticket_id_tickets_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "idx_email_rules_inbound" ON "email_parsing_rules" USING btree ("inbound_email");--> statement-breakpoint
CREATE UNIQUE INDEX "idx_kb_slug" ON "kb_articles" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "idx_kb_category" ON "kb_articles" USING btree ("category");--> statement-breakpoint
CREATE INDEX "idx_kb_published" ON "kb_articles" USING btree ("is_published");--> statement-breakpoint
CREATE UNIQUE INDEX "idx_kb_feedback_article_user" ON "kb_feedback" USING btree ("article_id","user_id");--> statement-breakpoint
CREATE INDEX "idx_sla_logs_ticket_id" ON "sla_logs" USING btree ("ticket_id");--> statement-breakpoint
CREATE INDEX "idx_sla_priority_dept" ON "sla_policies" USING btree ("priority","department");--> statement-breakpoint
CREATE INDEX "idx_assignments_ticket_id" ON "ticket_assignments" USING btree ("ticket_id");--> statement-breakpoint
CREATE INDEX "idx_assignments_assigned_to" ON "ticket_assignments" USING btree ("assigned_to");--> statement-breakpoint
CREATE INDEX "idx_assignments_current" ON "ticket_assignments" USING btree ("is_current");--> statement-breakpoint
CREATE INDEX "idx_attachments_message_id" ON "ticket_attachments" USING btree ("message_id");--> statement-breakpoint
CREATE INDEX "idx_messages_ticket_id" ON "ticket_messages" USING btree ("ticket_id");--> statement-breakpoint
CREATE INDEX "idx_messages_created_at" ON "ticket_messages" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_status_history_ticket_id" ON "ticket_status_history" USING btree ("ticket_id");--> statement-breakpoint
CREATE INDEX "idx_status_history_changed_at" ON "ticket_status_history" USING btree ("changed_at");--> statement-breakpoint
CREATE INDEX "idx_webhooks_active" ON "ticket_webhooks" USING btree ("is_active");--> statement-breakpoint
CREATE INDEX "idx_tickets_user_id" ON "tickets" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_tickets_status" ON "tickets" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_tickets_assigned_to" ON "tickets" USING btree ("assigned_to");--> statement-breakpoint
CREATE INDEX "idx_tickets_department" ON "tickets" USING btree ("department");--> statement-breakpoint
CREATE INDEX "idx_tickets_priority" ON "tickets" USING btree ("priority");--> statement-breakpoint
CREATE INDEX "idx_tickets_created_at" ON "tickets" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "idx_tickets_ticket_id" ON "tickets" USING btree ("ticket_id");