class CreateSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.string :name
      t.decimal :latitude
      t.decimal :longitude
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
