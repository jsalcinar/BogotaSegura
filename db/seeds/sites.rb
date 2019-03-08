sites_list = [
  [ "Jardin Botanico", 4.6684633, -74.1021517 ],
  [ "Torre Colpatria", 4.6109808, -74.0703936 ]
]

sites_list.each do |name, latitude, longitude|
  a_site = Site.create( name: name, latitude: latitude, longitude: longitude )
end