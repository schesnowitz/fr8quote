class CreateShipmentDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :shipment_destinations do |t|
      t.date :destination_date
      t.string :destination_name
      t.string :destination_street
      t.string :destination_city
      t.string :destination_state
      t.string :destination_zip
      t.string :destination_contact_person
      t.string :destination_notes
      t.integer :destination_shipment_id
      t.integer :destination_count
      t.string :destination_drop

      t.timestamps
    end
  end
end
