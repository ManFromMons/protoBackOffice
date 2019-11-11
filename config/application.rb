require_relative 'boot'
require 'sprockets/railtie'
require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ProtoBackOffice
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.generators do |g|
      g.template_engine :haml

    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end

  def self.homepage_url
    'http://www.clevermonkey.co.uk/'
  end

  def self.support_email_address
    'mailto:admin@clevermonkey.co.uk?subject="Support"&body="Support Request from: <yourname>"'
  end
end
