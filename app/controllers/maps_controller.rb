class MapsController < ApplicationController
	def map
    @google_api_src = "https://maps.googleapis.com/maps/api/js?key="+ENV['GMAP_API']+"&libraries=places"
	end
end
