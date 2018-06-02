class Shipperization < ApplicationRecord
  belongs_to :shipment
  belongs_to :shipper_receiver
end
