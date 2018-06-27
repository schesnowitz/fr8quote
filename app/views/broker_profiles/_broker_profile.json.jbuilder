json.extract! broker_profile, :id, :name, :street, :city, :state, :zip, :phone, :fax, :website, :logo, :mc, :contact, :email, :created_at, :updated_at
json.url broker_profile_url(broker_profile, format: :json)
