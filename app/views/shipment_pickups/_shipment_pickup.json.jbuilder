json.extract! shipment_pickup, :id, :date, :name, :street, :city, :state, :zip, :contact_person, :notes, :shipment_id, :created_at, :updated_at
json.url shipment_pickup_url(shipment_pickup, format: :json)
