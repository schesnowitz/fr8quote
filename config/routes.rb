Rails.application.routes.draw do



  resources :videos
  resources :shipment_destinations
  resources :shipment_pickups
  resources :shipper_receivers
  resources :app_settings

  resources :shipments do
    get 'shipment_addresses', to: 'shipments#shipment_addresses' 
  end

  root 'pages#index' 
  get 'edit_theme', to: 'app_settings#edit_theme'
  
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  mount Sidekiq::Web => '/sidekiq'

end 
