
app_setting = AppSetting.create!(
  hidden_sidebar: false,
  theme_color: '2'
)


# 5.times do
# sr = ShipperReceiver.create!( 
#   :name => Faker::Company.name,
#   :street => Faker::Address.street_address,
#   :city => Faker::Address.city,
#   :state => Faker::Address.state,
#   :zip => Faker::Address.zip,
#   :contact_person => Faker::Address.street_name,
#   :notes => Faker::Address.street_name,
#   :email => Faker::Internet.email,
#   :telephone => Faker::PhoneNumber.phone_number,
#   :url => Faker::Internet.domain_name
# )
# puts sr.inspect
# end