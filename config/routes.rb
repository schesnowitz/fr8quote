Rails.application.routes.draw do



  resources :broker_profiles
  resources :shipment_destinations
  resources :shipment_pickups
  resources :shipments do
    get 'shipment_addresses', to: 'shipments#shipment_addresses' 
  end
  resources :shipper_receivers
  
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  
  




  resources :app_settings

  root 'pages#index' 
  get 'edit_theme', to: 'app_settings#edit_theme'

  mount Sidekiq::Web => '/sidekiq'

end 
