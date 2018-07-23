class ShipmentDestination < ApplicationRecord
  default_scope { order(destination_count: :asc) } 
  belongs_to :shipment
  after_create :create_shipper_receiver
  after_update :create_shipper_receiver
  validates_presence_of :destination_date, :destination_name, :destination_street, :destination_city, :destination_state, :destination_zip, :destination_count  

  validates :destination_count, inclusion: { in: 1..5, message: 'The Pickup order must be between 1 and 5' }

  def create_shipper_receiver 
    if self.enter_manually?
      sr = ShipperReceiver.new
      sr.name = self.destination_name  
      sr.street = self.destination_street
      sr.city = self.destination_city 
      sr.state = self.destination_state
      sr.zip = self.destination_zip
      sr.save
    end
  end
end
