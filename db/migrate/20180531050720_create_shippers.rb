class CreateShippers < ActiveRecord::Migration[5.2]
  def change
    create_table :shippers do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :contact_person
      t.string :notes
      t.string :email
      t.string :url
      t.string :telephone
      t.timestamps
    end
  end
end
