Rails.application.routes.draw do

  resources :routes
  resources :reports
  resources :tips
  resources :delinquency_stats
  resources :zones

  devise_for :users
  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'
  
  get "pages/index"
  get "pages/services"
  get "pages/aboutus" 
  get "maps/map"  
  get "tipsservice/selection"  
  get "tipsservice/tip"  
  get "tipsservice/data"   
  root to: "pages#index"
end
