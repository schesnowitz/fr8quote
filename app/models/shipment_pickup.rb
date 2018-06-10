class ShipmentPickup < ApplicationRecord
  belongs_to :shipment, optional: true
end
