# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
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
