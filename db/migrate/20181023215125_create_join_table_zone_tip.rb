class CreateJoinTableZoneTip < ActiveRecord::Migration[5.2]
  def change
    create_join_table :zones, :tips do |t|
      # t.index [:zone_id, :tip_id]
      # t.index [:tip_id, :zone_id]
    end
  end
end
