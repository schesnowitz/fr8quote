class CreateBrokerProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :broker_profiles do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone
      t.string :fax
      t.string :url
      t.string :logo
      t.string :mc
      t.string :contact
      t.string :email

      t.timestamps
    end
  end
end
