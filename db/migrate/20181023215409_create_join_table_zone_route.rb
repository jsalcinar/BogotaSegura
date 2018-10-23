class CreateJoinTableZoneRoute < ActiveRecord::Migration[5.2]
  def change
    create_join_table :zones, :routes do |t|
      # t.index [:zone_id, :route_id]
      # t.index [:route_id, :zone_id]
    end
  end
end
