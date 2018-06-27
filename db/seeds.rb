
app_setting = AppSetting.create!(
  hidden_sidebar: false,
  theme_color: '2'
)

app_setting = AppSetting.find_or_initialize_by(id: 1)
app_setting.hidden_sidebar = false
app_setting.theme_color = '8'
app_setting.save 
puts app_setting.inspect

5.times do
sr = ShipperReceiver.create!(
  :name => Faker::Company.name,
  :street => Faker::Address.street_address,
  :city => Faker::Address.city,
  :state => Faker::Address.state,
  :zip => Faker::Address.zip,
  :contact_person => Faker::Address.street_name,
  :notes => Faker::Address.street_name,
  :email => Faker::Internet.email,
  :telephone => Faker::PhoneNumber.phone_number,
  :url => Faker::Internet.domain_name
)
puts sr.inspect
end

10.times do
  bp = BrokerProfile.create!(
    :name => Faker::Company.name,
    :street => Faker::Address.street_address,
    :city => Faker::Address.city,
    :state => Faker::Address.state,
    :zip => Faker::Address.zip,
    :phone => Faker::PhoneNumber.phone_number,
    :fax => Faker::PhoneNumber.phone_number,
    :url => Faker::Internet.domain_name,
    :mc => Faker::Number.number(6),
    :contact => Faker::Simpsons.character,
    :email => Faker::Internet.email
  )
  puts bp.inspect
  end
  


