class TipsController < ApplicationController

	def selection
		@type = "Pie"
	end
	def tip
		@type = params[:type]
	end
	def data
		@type = params[:type]
	end
end
