class CreateShipperizations < ActiveRecord::Migration[5.2]
  def change
    create_table :shipperizations do |t|
      t.integer :shipment_id
      t.integer :shipper_receiver_id

      t.timestamps
    end
  end
end
