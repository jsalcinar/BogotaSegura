class MapsController < ApplicationController
	def map
    @google_api_src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOL77h63YMvrMDxXl5q3eWq_JQ7sLQc1E&libraries=places"
	end
end
