require "application_system_test_case"

class ShipperReceiversTest < ApplicationSystemTestCase
  setup do
    @shipper_receiver = shipper_receivers(:one)
  end

  test "visiting the index" do
    visit shipper_receivers_url
    assert_selector "h1", text: "Shipper Receivers"
  end

  test "creating a Shipper receiver" do
    visit shipper_receivers_url
    click_on "New Shipper Receiver"

    fill_in "City", with: @shipper_receiver.city
    fill_in "Contact Person", with: @shipper_receiver.contact_person
    fill_in "Email", with: @shipper_receiver.email
    fill_in "Name", with: @shipper_receiver.name
    fill_in "Notes", with: @shipper_receiver.notes
    fill_in "State", with: @shipper_receiver.state
    fill_in "Street", with: @shipper_receiver.street
    fill_in "Url", with: @shipper_receiver.url
    fill_in "Zip", with: @shipper_receiver.zip
    click_on "Create Shipper receiver"

    assert_text "Shipper receiver was successfully created"
    click_on "Back"
  end

  test "updating a Shipper receiver" do
    visit shipper_receivers_url
    click_on "Edit", match: :first

    fill_in "City", with: @shipper_receiver.city
    fill_in "Contact Person", with: @shipper_receiver.contact_person
    fill_in "Email", with: @shipper_receiver.email
    fill_in "Name", with: @shipper_receiver.name
    fill_in "Notes", with: @shipper_receiver.notes
    fill_in "State", with: @shipper_receiver.state
    fill_in "Street", with: @shipper_receiver.street
    fill_in "Url", with: @shipper_receiver.url
    fill_in "Zip", with: @shipper_receiver.zip
    click_on "Update Shipper receiver"

    assert_text "Shipper receiver was successfully updated"
    click_on "Back"
  end

  test "destroying a Shipper receiver" do
    visit shipper_receivers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Shipper receiver was successfully destroyed"
  end
end
