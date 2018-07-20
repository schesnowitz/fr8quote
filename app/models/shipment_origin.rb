class ShipmentOrigin < ApplicationRecord
  belongs_to :shipment
  after_create :create_associations

  def create_associations
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
  # validates_presence_of :origin_date, :origin_name, :origin_street, :origin_city, :origin_state, :origin_zip, :origin_count, :shipment_id   
end
