class UsersController < ApplicationController
  layout 'white'
  before_action :authenticate_user!
  before_action :authenticate_admin, :except => [:show]

  # GET /users/username
  def show
    @user = User.find_by_username(params[:id])
  end
  # GET /users/new
  def new
    @user = User.new
    ApplicationMailer.confirm_user(@user).deliver
  end
  
  def index
    @users = User.all
  end

  # GET /users/username/edit
  def edit
    @user = User.find_by_username(params[:id])
  end

  # POST /users
  def create
    @user = User.new(post_params)

    if @user.save

      redirect_to users_url, :notice => 'User was successfully created.'
    else
      render :action => "new"
    end
  end

  # PUT /users/username
  def update
    @user = User.find_by_username(params[:id])
    
    if @user.update_attributes(post_params)
      redirect_to users_url, :notice => 'User was successfully updated.'
    else
      render :action => "edit"
    end
  end

  # DELETE /users/username
  def destroy
    @user = User.find_by_username(params[:id])
    @user.destroy
    
    redirect_to users_url
  end

  protected
  def post_params
  # Require params[:post] and allow its title and text key
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :avatar, :admin) 
  end
end
