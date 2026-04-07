# config/initializers/omniauth_ssl_bypass.rb
#
# ⚠️  DEVELOPMENT ONLY — disables SSL verification for OpenID Connect so
#     Zammad can reach Keycloak running on plain HTTP inside Docker.
#
# REMOVE THIS FILE IN PRODUCTION.
# In production, Keycloak must be behind HTTPS and this file must not exist.
#
# To disable: remove the zammad-initializers volume mount from
# zammad-railsserver in docker-compose.yml and restart.

require 'openssl'

# Monkey-patch Net::HTTP used by openid_connect gem
module OpenIDConnectSSLBypass
  def self.included(base)
    base.class_eval do
      alias_method :orig_start, :start

      def start(&block)
        self.verify_mode = OpenSSL::SSL::VERIFY_NONE if use_ssl?
        orig_start(&block)
      end
    end
  end
end

# Apply after initialization
Rails.application.config.after_initialize do
  if ENV['OPENID_CONNECT_DISABLE_SSL_VERIFY'] == 'true'
    require 'net/http'
    Net::HTTP.send(:include, OpenIDConnectSSLBypass)
    Rails.logger.warn '[DEV] OpenID Connect SSL verification DISABLED — do not use in production'
  end
end
