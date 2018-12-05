# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
  after_filter :log_failed_login, :only => :new

  def create
    super
    ::Rails.logger.info "\n***\nSuccessful login with email_id : #{request.filtered_parameters["user"]}\n***\n"
  end

  private
  def log_failed_login
    ::Rails.logger.info "\n***\nFailed login with email_id : #{request.filtered_parameters["user"]}\n***\n" if failed_login?
  end 

  def failed_login?
    (options = env["warden.options"]) && options[:action] == "unauthenticated"
  end 
end
