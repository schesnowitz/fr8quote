class ShipmentOrigin < ApplicationRecord
  default_scope { order(origin_count: :asc) } 
  belongs_to :shipment
  after_create :create_shipper_receiver
  after_update :create_shipper_receiver
  validates_presence_of :origin_date, :origin_name, :origin_street, :origin_city, :origin_state, :origin_zip, :origin_count  

  validates :origin_count, inclusion: { in: 1..5, message: 'The Pickup order must be between 1 and 5' }

  def create_shipper_receiver 
    if self.enter_manually?
      sr = ShipperReceiver.new
      sr.name = self.origin_name  
      sr.street = self.origin_street
      sr.city = self.origin_city 
      sr.state = self.origin_state
      sr.zip = self.origin_zip
      sr.save
    end
  end

end
