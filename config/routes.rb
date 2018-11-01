Rails.application.routes.draw do

  get 'pages/tips2'
  resources :routes
  resources :reports
  resources :tips
  resources :delinquency_stats
  resources :zones

  devise_for :users, controllers: { 
    registrations: 'users/registrations' ,
    sessions: 'users/sessions',
  }
  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'
  
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
