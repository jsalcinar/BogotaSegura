class UsersController < ApplicationController
  layout 'white'
  before_action :authenticate_user!
  before_action :authenticate_admin, :except => [:show]

  def index
  end

  def show
    @user = User.find_by_username(params[:id])
  end

end
