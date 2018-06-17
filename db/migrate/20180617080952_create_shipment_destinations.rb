class CreateShipmentDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :shipment_destinations do |t|
      t.date :date
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :contact_person
      t.string :notes
      t.integer :shipment_id, index: true

      t.timestamps
    end
  end
end
