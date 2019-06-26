class FlightsController < ApplicationController
  # security check! only admin can touch this controller's actions, def is in the application.html

  # before_action :check_if_admin


  def index
    @flights= Flight.all.order(date: :asc)
  end


  def new
    @flight = Flight.new
  end


  def create
    @flight = Flight.new params_flight
    @flight.save

    if @flight.persisted?
      redirect_to flights_path
    else
      flash.now[:errors] = @flight.errors.full_messages
      render :new
    end
  end


  def edit
    @flight = Flight.find params[:id]
  end


  def update
    @flight = Flight.find params[:id]

    if @flight.update params_flight
      redirect_to flights_path
    else
      flash.now[:errors] = @flight.errors.full_messages
      render :edit
    end
  end


  def destroy
    Flight.destroy params[:id]
    redirect_to flights_path
  end



  private


  def params_flight
    params.require(:flight).permit(:flight_number, :date, :to, :from, :airplane_id)
  end
end
