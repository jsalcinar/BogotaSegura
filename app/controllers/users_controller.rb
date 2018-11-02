class UsersController < ApplicationController
  layout 'white'
  before_action :authenticate_user!
  before_action :authenticate_admin, :except => [:show]

  def index
    @users = User.all
  end

  def show
    @user = User.find_by_username(params[:id])
  end
  
  def reset
      @user.avatar = 'image/upload/v1541084536/bogotasegura/avatar/default/default.png'
  end

end
