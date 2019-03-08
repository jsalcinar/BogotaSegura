Rails.application.routes.draw do

  resources :sites
  namespace :admin do
      resources :users, :delinquency_stats, :reports, :routes, :tips, :zones
      root to: "users#index"
    end
  resources :delinquency_stats, :reports, :routes, :tips, :zones

  devise_for :users, :path_prefix => 'sessions'
  resources :users do
    collection do
      put :update
    end
  end

  
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
