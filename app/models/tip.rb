class Tip < ApplicationRecord
  has_and_belongs_to_many :zones
end
