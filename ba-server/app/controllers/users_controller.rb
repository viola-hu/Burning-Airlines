class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create user_params

    if @user.persisted?
      # Log them in automatically!
      session[:user_id] = @user.id

      redirect_to user_path(@user.id)
    else
      # Set some error messages, and show the login form again
        # p user.errors.full_messages
      flash[:errors] = @user.errors.full_messages
      # Render the signup form from this action,
      # instead of redirecting to it.
      # The main benefit of this is that any
      # fields the user has already filled in, will
      # be filled in again for them automatically -
      # but only if the result of the User.create
      # is saved into an instance variable with the
      # same name as in the 'new' action: @user
      # (this is what form_for expects)

      render :new
    end

  end

  def show
    p @current_user
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
