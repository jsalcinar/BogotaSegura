class TipsserviceController < ApplicationController

  def selection
    @type = "Walk"
  end
  def tip
    @type = params[:type]
  end
  def data
    @type = params[:type]
  end
end
