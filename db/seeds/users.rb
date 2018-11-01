users_list = [
  [ "administrator", "administrator@gmail.com", "123456", "image/upload/v1541084740/bogotasegura/avatar/default/administrator.png", true ]
  [ "administrator", "administrator@gmail.com", "bogota", "image/upload/v1541084537/bogotasegura/avatar/default/hector.png", false ]
  [ "hector", "hector@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ]
  [ "ariel", "ariel@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ],
  [ "adam", "adam@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ],
  [ "george", "george@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ],
  [ "frederic", "Frederic@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ],
  [ "sophia", "sophia@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/default.png", false ]
]

users_list.each do |username, email, password, avatar, admin|
  User.create( username: username, email: email, password: password, avatar: avatar: avatar, admin: admin )
end