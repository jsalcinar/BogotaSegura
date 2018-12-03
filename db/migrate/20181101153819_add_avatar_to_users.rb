class AddAvatarToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar, :string, default: "image/upload/v1543846254/bogotasegura/avatar/default/default.png"
  end
end
