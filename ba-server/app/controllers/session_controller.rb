class SessionController < ApplicationController
  def new
  end

  def create
    #see if the email addresss entered actually existsin the users table
    user = User.find_by email: params[:email]

    #is the email address valid, and is the pasword the right one for this address?
    if user.present? && user.authenticate( params[:password] )
      #Successful login :
      #get rails to create a new session key to store the user's ID;
      #this is the key we will use to check id the user is still logged in, for all #future page requests
      #i.e this session data is remembered across page requests
      #(this is done by setting browser cookies)
      session[:user_id] = user.id
      redirect_to user_path(user.id) #should redirect to user's profile page
    else
      #failed login (wrong creds):

      #show error message

      #to do this, we use the special 'flash' hash - this creates a key-value
      #pair which exists for ONLY the NEXT PAGE LOAD
      flash[:error] = "Invalid email address or password"
      redirect_to login_path

    end

  end

  def destroy
    session[:user_id] = nil # this logs out the usr (deletes the session user ID)
    redirect_to login_path
  end
end
