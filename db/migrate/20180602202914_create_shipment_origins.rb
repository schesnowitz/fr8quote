class CreateShipmentOrigins < ActiveRecord::Migration[5.2]
  def change
    create_table :shipment_origins do |t|
      t.date :origin_date
      t.string :origin_name
      t.string :origin_street
      t.string :origin_city
      t.string :origin_state
      t.string :origin_zip
      t.string :origin_contact_person
      t.string :origin_notes
      t.integer :shipment_id, index: true
      t.integer :origin_count
      t.string :origin_drop

      t.timestamps
    end
  end
end
