class ShipperReceiversController < ApplicationController
  before_action :set_shipper_receiver, only: [:show, :edit, :update, :destroy]

  # GET /shipper_receivers
  # GET /shipper_receivers.json
  def index
    @shipper_receivers = ShipperReceiver.all
  end

  # GET /shipper_receivers/1
  # GET /shipper_receivers/1.json
  def show
  end

  # GET /shipper_receivers/new
  def new
    @shipment = Shipment.find(params[:shipment_id])
    @shipper_receiver = ShipperReceiver.new
  end

  # GET /shipper_receivers/1/edit
  def edit
  end

  # POST /shipper_receivers
  # POST /shipper_receivers.json
  def create
    @shipper_receiver = ShipperReceiver.new(shipper_receiver_params)

    respond_to do |format|
      if @shipper_receiver.save
        format.html { redirect_to @shipper_receiver, notice: 'Shipper receiver was successfully created.' }
        format.json { render :show, status: :created, location: @shipper_receiver }
      else
        format.html { render :new }
        format.json { render json: @shipper_receiver.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shipper_receivers/1
  # PATCH/PUT /shipper_receivers/1.json
  def update
    respond_to do |format|
      if @shipper_receiver.update(shipper_receiver_params)
        format.html { redirect_to @shipper_receiver, notice: 'Shipper receiver was successfully updated.' }
        format.json { render :show, status: :ok, location: @shipper_receiver }
      else
        format.html { render :edit }
        format.json { render json: @shipper_receiver.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shipper_receivers/1
  # DELETE /shipper_receivers/1.json
  def destroy
    @shipper_receiver.destroy
    respond_to do |format|
      format.html { redirect_to shipper_receivers_url, notice: 'Shipper receiver was successfully destroyed.' }
      format.json { head :no_content }
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shipper_receiver
      @shipper_receiver = ShipperReceiver.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shipper_receiver_params
      params.require(:shipper_receiver).permit(
      :name, 
      :street, 
      :city, 
      :state, 
      :zip, 
      :contact_person, 
      :notes, 
      :email, 
      :url,
      :telephone
      )
    end
end
