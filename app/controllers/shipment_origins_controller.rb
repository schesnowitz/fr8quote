class ShipmentOriginsController < ApplicationController
  before_action :set_shipment_origin, only: [:show, :edit, :update, :destroy]

  # GET /shipment_origins
  # GET /shipment_origins.json
  def index
    @shipment_origins = ShipmentOrigin.all
  end

  # GET /shipment_origins/1
  # GET /shipment_origins/1.json
  def show
  end

  # GET /shipment_origins/new
  def new
    @shipment_origin = ShipmentOrigin.new
  end

  # GET /shipment_origins/1/edit
  def edit
  end

  # POST /shipment_origins
  # POST /shipment_origins.json
  def create
    @shipment_origin = ShipmentOrigin.new(shipment_origin_params)

    respond_to do |format|
      if @shipment_origin.save
        format.html { redirect_to @shipment_origin, notice: 'Shipment origin was successfully created.' }
        format.json { render :show, status: :created, location: @shipment_origin }
      else
        format.html { render :new }
        format.json { render json: @shipment_origin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shipment_origins/1
  # PATCH/PUT /shipment_origins/1.json
  def update
    respond_to do |format|
      if @shipment_origin.update(shipment_origin_params)
        format.html { redirect_to @shipment_origin, notice: 'Shipment origin was successfully updated.' }
        format.json { render :show, status: :ok, location: @shipment_origin }
      else
        format.html { render :edit }
        format.json { render json: @shipment_origin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shipment_origins/1
  # DELETE /shipment_origins/1.json
  def destroy
    @shipment_origin.destroy
    respond_to do |format|
      format.html { redirect_to shipment_origins_url, notice: 'Shipment origin was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shipment_origin
      @shipment_origin = ShipmentOrigin.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shipment_origin_params
      params.require(:shipment_origin).permit(:date, :name, :street, :city, :state, :zip, :contact_person, :notes, :shipment_id)
    end
end
