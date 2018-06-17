class ShipmentDestination < ApplicationRecord
  belongs_to :shipment, optional: true
end
