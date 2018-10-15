class MapsController < ApplicationController
	def map
    @google_api_key = 'AIzaSyDOL77h63YMvrMDxXl5q3eWq_JQ7sLQc1E'
    @map_center = [4.6371933,-74.0826976]
    @map_zoom= 18
	end
end
