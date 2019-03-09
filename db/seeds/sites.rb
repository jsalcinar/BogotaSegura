sites_list = [
  [ "Jardin Botanico", 4.6684633, -74.1021517, "Vive una experiencia en el Jardin Botanico de Bogota.", "www.jbb.gov.co" ],
  [ "Torre Colpatria", 4.6109808, -74.0703936, "Conoce uno de los edificios mas altos de Colombia.", "www.colpatria.com" ]
]

sites_list.each do |name, latitude, longitude, description, url|
  a_site = Site.create( name: name, latitude: latitude, longitude: longitude, description: description, url: url )
end