require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.generators do |g|
      g.test_framework :rspec, fixture: false
    end
  end
end
