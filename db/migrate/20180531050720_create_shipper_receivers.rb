class CreateShipperReceivers < ActiveRecord::Migration[5.2]
  def change
    create_table :shipper_receivers do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :contact_person
      t.string :notes
      t.string :email
      t.string :url

      t.timestamps
    end
  end
end
