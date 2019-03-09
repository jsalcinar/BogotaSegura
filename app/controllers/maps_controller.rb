class MapsController < ApplicationController
	def map
		@sites = Site.all;
	end
end
