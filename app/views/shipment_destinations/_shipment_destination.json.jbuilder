json.extract! shipment_destination, :id, :date, :name, :street, :city, :state, :zip, :contact_person, :notes, :shipment_id, :destination_count, :created_at, :updated_at
json.url shipment_destination_url(shipment_destination, format: :json)
