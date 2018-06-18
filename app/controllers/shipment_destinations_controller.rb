class ShipmentDestinationsController < ApplicationController
  before_action :set_shipment_destination, only: [:show, :edit, :update, :destroy]

  # GET /shipment_destinations
  # GET /shipment_destinations.json
  def index
    @shipment_destinations = ShipmentDestination.all
  end

  # GET /shipment_destinations/1
  # GET /shipment_destinations/1.json
  def show
  end

  # GET /shipment_destinations/new
  def new
    @shipment_destination = ShipmentDestination.new
  end

  # GET /shipment_destinations/1/edit
  def edit
  end

  # POST /shipment_destinations
  # POST /shipment_destinations.json
  def create
    @shipment_destination = ShipmentDestination.new(shipment_destination_params)

    respond_to do |format|
      if @shipment_destination.save
        format.html { redirect_to @shipment_destination, notice: 'Shipment destination was successfully created.' }
        format.json { render :show, status: :created, location: @shipment_destination }
      else
        format.html { render :new }
        format.json { render json: @shipment_destination.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shipment_destinations/1
  # PATCH/PUT /shipment_destinations/1.json
  def update
    respond_to do |format|
      if @shipment_destination.update(shipment_destination_params)
        format.html { redirect_to @shipment_destination, notice: 'Shipment destination was successfully updated.' }
        format.json { render :show, status: :ok, location: @shipment_destination }
      else
        format.html { render :edit }
        format.json { render json: @shipment_destination.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shipment_destinations/1
  # DELETE /shipment_destinations/1.json
  def destroy
    @shipment_destination.destroy
    respond_to do |format|
      format.html { redirect_to shipment_destinations_url, notice: 'Shipment destination was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shipment_destination
      @shipment_destination = ShipmentDestination.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shipment_destination_params
      params.require(:shipment_destination).permit(
        :destination_date,
        :destination_name, 
        :destination_street, 
        :destination_city, 
        :destination_state, 
        :destination_zip, 
        :destination_contact_person, 
        :destination_notes, 
        :shipment_id, 
        :destination_count,
        :destination_drop
        )
    end
end
