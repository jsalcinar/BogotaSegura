class UsersController < ApplicationController
  before_action :authenticate_admin, :except => [:show]

  def admin?
    self.admin == true
  end

  def authenticate_admin
    redirect_to '/', alert: 'Not authorized.' unless current_user && access_whitelist
  end


  def index
  end
  def show
    @user = User.find_by_username(params[:id])
  end

  private
    def access_whitelist
      current_user.try(:admin?)
    end

end
