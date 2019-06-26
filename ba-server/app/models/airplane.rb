class Airplane < ApplicationRecord

  has_many :flights

  # planes cannot have the same name and must have rows and columns
  # this should not cause any problems for seeding
  validates :name, presence: true, uniqueness: true
  validates :rows, presence: true
  validates :columns, presence: true


end
