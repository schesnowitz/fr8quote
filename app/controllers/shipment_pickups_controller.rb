class ShipmentPickupsController < ApplicationController
  before_action :set_shipment_pickup, only: [:show, :edit, :update, :destroy]

  # GET /shipment_pickups
  # GET /shipment_pickups.json
  def index
    @shipment_pickups = ShipmentPickup.all
  end

  # GET /shipment_pickups/1
  # GET /shipment_pickups/1.json
  def show
  end

  # GET /shipment_pickups/new
  def new
    @shipment_pickup = ShipmentPickup.new
  end

  # GET /shipment_pickups/1/edit
  def edit
  end

  # POST /shipment_pickups
  # POST /shipment_pickups.json
  def create
    @shipment_pickup = ShipmentPickup.new(shipment_pickup_params)

    respond_to do |format|
      if @shipment_pickup.save
        format.html { redirect_to @shipment_pickup, notice: 'Shipment pickup was successfully created.' }
        format.json { render :show, status: :created, location: @shipment_pickup }
      else
        format.html { render :new }
        format.json { render json: @shipment_pickup.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shipment_pickups/1
  # PATCH/PUT /shipment_pickups/1.json
  def update
    respond_to do |format|
      if @shipment_pickup.update(shipment_pickup_params)
        format.html { redirect_to @shipment_pickup, notice: 'Shipment pickup was successfully updated.' }
        format.json { render :show, status: :ok, location: @shipment_pickup }
      else
        format.html { render :edit }
        format.json { render json: @shipment_pickup.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shipment_pickups/1
  # DELETE /shipment_pickups/1.json
  def destroy
    @shipment_pickup.destroy
    respond_to do |format|
      format.html { redirect_to shipment_pickups_url, notice: 'Shipment pickup was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shipment_pickup
      @shipment_pickup = ShipmentPickup.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shipment_pickup_params
      params.require(:shipment_pickup).permit(:date, :name, :street, :city, :state, :zip, :contact_person, :notes, :shipment_id)
    end
end
