class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.text :description
      t.integer :score

      t.timestamps
    end
  end
end
