class Flight < ApplicationRecord

  has_many :reservations
  belongs_to :airplane, optional: true
  has_many :users, through: :reservations
  # has_and_belongs_to_many :users, through: 'Reservation'

end
