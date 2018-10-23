class Report < ApplicationRecord
  has_and_belongs_to_many :zones
  belongs_to :user
end
