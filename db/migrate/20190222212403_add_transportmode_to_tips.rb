class AddTransportmodeToTips < ActiveRecord::Migration[5.2]
  def change
    add_column :tips, :transportmode, :string
  end
end
