class Zone < ApplicationRecord
  has_one :delinquency_stat
  has_and_belongs_to_many :tips
  has_and_belongs_to_many :routes
  has_and_belongs_to_many :reports
end
