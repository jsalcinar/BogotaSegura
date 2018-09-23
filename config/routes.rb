Rails.application.routes.draw do
  get "pages/map"	
  root to: "pages#index"
end
