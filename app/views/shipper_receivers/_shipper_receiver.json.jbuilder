json.extract! shipper_receiver, :id, :name, :street, :city, :state, :zip, :contact_person, :notes, :email, :url, :created_at, :updated_at
json.url shipper_receiver_url(shipper_receiver, format: :json)
