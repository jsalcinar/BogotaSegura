users_list = [
  [ "hector", "hector@gmail.com", "bogota", "image/upload/v1541084536/bogotasegura/avatar/default/hector.png" ],
  [ "ariel", "ariel@gmail.com", "bogota", "image/upload/v1543846254/bogotasegura/avatar/default/default.png" ],
  [ "adam", "adam@gmail.com", "bogota", "image/upload/v1543846254/bogotasegura/avatar/default/default.png" ],
  [ "george", "george@gmail.com", "bogota", "image/upload/v1543846254/bogotasegura/avatar/default/default.png" ],
  [ "frederic", "Frederic@gmail.com", "bogota", "image/upload/v1543846254/bogotasegura/avatar/default/default.png" ],
  [ "sophia", "sophia@gmail.com", "bogota", "image/upload/v1543846254/bogotasegura/avatar/default/default.png" ]
]

users_list.each do |username, email, password, picture|
  a_user = User.create( username: username, email: email, password: password, avatar: picture )
  a_user.avatar = "image/upload/v1543846254/bogotasegura/avatar/default/default.png";
end