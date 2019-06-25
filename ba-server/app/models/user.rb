class User < ApplicationRecord

  has_many :reservations
  has_many :flights, through: :reservations, source: 'flight'
  # has_and_belongs_to_many :flights, through: 'Reservation'

  has_secure_password

end
