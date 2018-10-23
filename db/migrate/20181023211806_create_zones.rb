class CreateZones < ActiveRecord::Migration[5.2]
  def change
    create_table :zones do |t|
      t.string :coordinate
      t.string :name
      t.integer :CAI
      t.integer :user_score
      t.string :influx

      t.timestamps
    end
  end
end
