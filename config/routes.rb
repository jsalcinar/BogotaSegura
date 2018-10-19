Rails.application.routes.draw do
  devise_for :users
  get "pages/index"
  get "pages/services"
  get "pages/aboutus" 
  get "maps/map"  
  get "tips/selection"  
  get "tips/tip"  
  get "tips/data"   
  root to: "pages#index"
end
