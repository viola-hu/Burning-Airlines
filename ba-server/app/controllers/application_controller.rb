class ApplicationController < ActionController::Base

  before_action :fetch_user #Run this method before every action of every controller

  def fetch_user
    # Check if session[:user_id] is set, and also make sure the #ID it contains is a vlaid isr ID - if so set an instande #variable containing the usr objest . by settin that #variable here it will be available to any action inside any #controller

    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
  end

    session[:user_id] = nil unless @current_user.present?

  end

    def check_if_logged_in

      unless @current_user.present?
        flash[:error] = "You must be logged in to view that page."
        redirect_to login_path
      end

    end



end
