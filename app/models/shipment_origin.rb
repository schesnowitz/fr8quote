class ShipmentOrigin < ApplicationRecord
  belongs_to :shipment, optional: true
end
