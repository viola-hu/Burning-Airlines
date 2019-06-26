class FlightsController < ApplicationController
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


  def index

    @flight 


  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def params_flight
    params.require(:flight).permit(:flight_number, :date, :to, :from, :airplane_id)
  end
end
