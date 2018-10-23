class CreateDelinquencyStats < ActiveRecord::Migration[5.2]
  def change
    create_table :delinquency_stats do |t|
      t.integer :theft_to_person
      t.integer :theft_to_car
      t.integer :theft_to_motorbike
      t.integer :theft_to_bike
      t.integer :theft_to_building
      t.integer :injury_to_person

      t.timestamps
    end
  end
end
