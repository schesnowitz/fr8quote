class ShipperReceiver < ApplicationRecord
  has_many :shipperizations
  has_many :shipments, :through => :shipperizations
end