class MapsController < ApplicationController
	def map
    @google_api_src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWsmv5NY2NWmM7sK0osNfz5hd-7RiUdm0&libraries=places"
	end
end
