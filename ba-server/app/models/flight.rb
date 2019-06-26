class Flight < ApplicationRecord

  has_many :reservations
  belongs_to :airplane, optional: true
  has_many :users, through: :reservations
  # has_and_belongs_to_many :users, through: 'Reservation'

  validates :flight_number, presence: true
  validates :date, presence: true
  validates :to, presence: true
  validates :from, presence: true
  validates :airplane_id, presence: true

end


# t.integer "flight_number"
# t.date "date"
# t.text "to"
# t.text "from"
# t.integer "airplane_id"
