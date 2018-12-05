Rails.application.routes.draw do

  resources :delinquency_stats, :reports, :routes, :tips, :zones

  devise_for :users, :path_prefix => 'sessions', controllers: { registrations: 'users/registrations', omniauth_callbacks: 'users/omniauth_callbacks', sessions_controller: 'users/sessions_controller' }
  resources :users do
    get :rollback         #for audit
    collection do
      put :update
    end
    root to:'users#index'  #for audit
  end

  
  get "pages/index"
  get "pages/services"
  get "pages/aboutus" 
  get "pages/tips"
  get "pages/papertrail"
  get "maps/map"  
  get "tipsservice/selection"  
  get "tipsservice/tip"  
  get "tipsservice/data"   
  root to: "pages#index"
end
