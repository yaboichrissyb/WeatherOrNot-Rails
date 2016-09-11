# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( pages.css )
Rails.application.config.assets.precompile += %w( skycons.js )
Rails.application.config.assets.precompile += %w( weather-icons-wind.css.scss.erb )
Rails.application.config.assets.precompile += %w( weather-icons.css.scss.erb )
Rails.application.config.assets.precompile += %w( weathericons-regular-webfont.svg )
Rails.application.config.assets.precompile += %w( weathericons-regular-webfont.eot )
Rails.application.config.assets.precompile += %w( weathericons-regular-webfont.ttf )
Rails.application.config.assets.precompile += %w( weathericons-regular-webfont.woff2 )


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
