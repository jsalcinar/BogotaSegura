Rails.application.routes.draw do

  namespace :admin do
      resources :users, :delinquency_stats, :reports, :routes, :tips, :zones
      root to: "users#index"
    end
  resources :delinquency_stats, :reports, :routes, :tips, :zones

  devise_for :users, :path_prefix => 'sessions'
  resources :users
  
  get "pages/index"
  get "pages/services"
  get "pages/aboutus" 
  get "pages/tips"
  get "maps/map"  
  get "tipsservice/selection"  
  get "tipsservice/tip"  
  get "tipsservice/data"   
  root to: "pages#index"
end
