class DelinquencyStatsController < ApplicationController
  before_action :set_delinquency_stat, only: [:show, :edit, :update, :destroy]

  # GET /delinquency_stats
  # GET /delinquency_stats.json
  def index
    @delinquency_stats = DelinquencyStat.all
  end

  # GET /delinquency_stats/1
  # GET /delinquency_stats/1.json
  def show
  end

  # GET /delinquency_stats/new
  def new
    @delinquency_stat = DelinquencyStat.new
  end

  # GET /delinquency_stats/1/edit
  def edit
  end

  # POST /delinquency_stats
  # POST /delinquency_stats.json
  def create
    @delinquency_stat = DelinquencyStat.new(delinquency_stat_params)

    respond_to do |format|
      if @delinquency_stat.save
        format.html { redirect_to @delinquency_stat, notice: 'Delinquency stat was successfully created.' }
        format.json { render :show, status: :created, location: @delinquency_stat }
      else
        format.html { render :new }
        format.json { render json: @delinquency_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /delinquency_stats/1
  # PATCH/PUT /delinquency_stats/1.json
  def update
    respond_to do |format|
      if @delinquency_stat.update(delinquency_stat_params)
        format.html { redirect_to @delinquency_stat, notice: 'Delinquency stat was successfully updated.' }
        format.json { render :show, status: :ok, location: @delinquency_stat }
      else
        format.html { render :edit }
        format.json { render json: @delinquency_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /delinquency_stats/1
  # DELETE /delinquency_stats/1.json
  def destroy
    @delinquency_stat.destroy
    respond_to do |format|
      format.html { redirect_to delinquency_stats_url, notice: 'Delinquency stat was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_delinquency_stat
      @delinquency_stat = DelinquencyStat.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def delinquency_stat_params
      params.require(:delinquency_stat).permit(:theft_to_person, :theft_to_car, :theft_to_motorbike, :theft_to_bike, :theft_to_building, :injury_to_person)
    end
end