class CreateShipmentOrigins < ActiveRecord::Migration[5.2]
  def change
    create_table :shipment_origins do |t|
      t.date :date
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :contact_person
      t.string :notes
      t.integer :shipment_id, index: true
      t.integer :origin_count

      t.timestamps
    end
  end
end
