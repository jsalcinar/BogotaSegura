class AddAvatarToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar, :string, default: "image/upload/v1541084536/bogotasegura/avatar/default/User.png"
  end
end
