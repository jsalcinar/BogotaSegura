users_list = [
  [ "ariel", "ariel@gmail.com", "bogota" ],
  [ "adam", "adam@gmail.com", "bogota" ],
  [ "george", "george@gmail.com", "bogota" ],
  [ "frederic", "Frederic@gmail.com", "bogota" ],
  [ "sophia", "sophia@gmail.com", "bogota" ]
]

users_list.each do |username, email, password|
  User.create( username: username, email: email, password: password, admin: false )
end