Rails.application.routes.draw do



  resources :shipments
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  




  resources :app_settings

  root 'pages#index' 
  get 'edit_theme', to: 'app_settings#edit_theme'

  mount Sidekiq::Web => '/sidekiq'

end 
