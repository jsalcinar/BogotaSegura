class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected



  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  layout :layout_by_resource

  private

  def layout_by_resource
    if devise_controller?
      "white"
    else
      "application"
    end
  end
end
