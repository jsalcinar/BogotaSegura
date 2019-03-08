class MapsController < ApplicationController
	def map
		@sites = Site.all;
	end
	def refresh_comments
		@site = Site.find(params[:id]);
	    @comments = @site.comments.all
		@comment = @site.comments.build
	
	    # get whatever data you need to a variable named @data 
	    respond_to do |format| 
	        format.js {render :action=>"refresh_comments.js"} 
	    end
	
	end
end
