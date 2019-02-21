users_list = [
  [ "hector", "hector@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ],
  [ "ariel", "ariel@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ],
  [ "adam", "adam@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ],
  [ "george", "george@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ],
  [ "frederic", "Frederic@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ],
  [ "sophia", "sophia@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/User.png" ]
]

users_list.each do |username, email, password, picture|
  a_user = User.create( username: username, email: email, password: password, avatar: picture )
  a_user.avatar = "image/upload/v1541084536/bogotasegura/avatar/default/User.png";
end