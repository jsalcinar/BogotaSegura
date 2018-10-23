class CreateJoinTableZoneReport < ActiveRecord::Migration[5.2]
  def change
    create_join_table :zones, :reports do |t|
      # t.index [:zone_id, :report_id]
      # t.index [:report_id, :zone_id]
    end
  end
end
