class FlightsController < ApplicationController
  # security check! only admin can touch this controller's actions, def is in the application.html

  # before_action :check_if_admin
  before_action :set_cors_headers


  def index
    @flights= Flight.all.order(date: :asc)

      respond_to do |format|
      format.html
      format.json { render json: @flights }
    end
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



  def search
    set_cors_headers
    current_from = params[:from]
    current_to = params[:to]
    @flights = Flight.where from: current_from, to: current_to

    # include: allows for association for airplane model
    render json: @flights, include: { airplane: {only: :name} }

  end


  def destroy
    Flight.destroy params[:id]
    redirect_to flights_path
  end


  private

  def set_cors_headers
      headers['Access-Control-Allow-Origin'] = '*'
  end


  def params_flight
    params.require(:flight).permit(:flight_number, :date, :to, :from, :airplane_id)
  end
end
