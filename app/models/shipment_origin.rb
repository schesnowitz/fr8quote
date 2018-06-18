class ShipmentOrigin < ApplicationRecord
  belongs_to :shipment, optional: true

  validates_presence_of :origin_date, :origin_name, :origin_street, :origin_city, :origin_state, :origin_zip, :origin_count
end
