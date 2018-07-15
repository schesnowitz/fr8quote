class Shipment < ApplicationRecord

  has_many :shipperizations
  has_many :shipper_receivers, through: :shipperizations
  has_many :shipment_origins, dependent: :destroy

  accepts_nested_attributes_for :shipment_origins,
                                allow_destroy: true,
                                reject_if: proc{ |attribute| attribute['origin_name'].blank? }
  #                               reject_if: :all_blank  
  validates :shipment_origins, presence: true       
    
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