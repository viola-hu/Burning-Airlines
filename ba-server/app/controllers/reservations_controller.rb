class ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new params_flight_reservation
    @reservation.save
  end

end
