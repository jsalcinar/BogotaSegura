Rails.application.routes.draw do
  get 'users/index'
  resources :routes
  resources :reports
  resources :tips
  resources :delinquency_stats
  resources :zones

  match '/users',   to: 'users#index',   via: 'get'
  match '/users/:id',     to: 'users#show',       via: 'get'
  devise_for :users, :path_prefix => 'd'
  resources :users, :only =>[:show]
  
  get "pages/index"
  get "pages/services"
  get "pages/aboutus" 
  get "maps/map"  
  get "tipsservice/selection"  
  get "tipsservice/tip"  
  get "tipsservice/data"   
  root to: "pages#index"
end
