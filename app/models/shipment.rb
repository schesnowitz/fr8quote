class Shipment < ApplicationRecord

  has_many :shipperizations
  has_many :shipper_receivers, through: :shipperizations
  has_many :shipment_pickups, dependent: :destroy

  accepts_nested_attributes_for :shipment_pickups,
                                allow_destroy: true,
                                # reject_if: proc{ |attribute| attribute['name'].blank? }
                                reject_if: :all_blank  
  validates :shipment_pickups, presence: true  

  Commodity = 
[
  "Household Goods",
  "Metal - sheets, coils, rolls",        
  'Motor Vehicles',
  'Drive/Tow away',
  'Logs, Poles, Beams, Lumber',
  'Building Materials',
  'Machinery',
  'Fresh Produce',
  'Liquids/Gases',
  'Intermodal',
  'Oilfield Equipment',
  'Livestock',
  'Grain, Feed, Hay',
  'Coal/Coke',
  'Meat',
  'Garbage/Refuse',
  'US Mail',
  'Chemicals',
  'Commodities Dry Bulk',
  'Refrigerated Food',
  'Beverages',
  'Paper Products',
  'Utilities',
  'Agricultural/Farm Supplies',
  'Construction',
  'Water Well'
]

ShipmentStatus = %w(
  Active
  Pending
  Complete
  Cancelled
)
end