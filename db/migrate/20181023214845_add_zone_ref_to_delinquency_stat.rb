class AddZoneRefToDelinquencyStat < ActiveRecord::Migration[5.2]
  def change
    add_reference :delinquency_stats, :zone, foreign_key: true
  end
end
