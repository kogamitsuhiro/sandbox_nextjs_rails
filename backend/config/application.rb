require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.time_zone = 'Tokyo'
    config.generators do |g|
      g.test_framework :rspec, fixture: false
    end
    config.autoload_paths << Rails.root.join("lib")
  end
end
