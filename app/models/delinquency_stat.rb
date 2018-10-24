class DelinquencyStat < ApplicationRecord
  belongs_to :zone#, index: {unique: true}, foreign_key: true
end
