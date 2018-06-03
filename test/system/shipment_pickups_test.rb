require "application_system_test_case"

class ShipmentPickupsTest < ApplicationSystemTestCase
  setup do
    @shipment_pickup = shipment_pickups(:one)
  end

  test "visiting the index" do
    visit shipment_pickups_url
    assert_selector "h1", text: "Shipment Pickups"
  end

  test "creating a Shipment pickup" do
    visit shipment_pickups_url
    click_on "New Shipment Pickup"

    fill_in "City", with: @shipment_pickup.city
    fill_in "Contact Person", with: @shipment_pickup.contact_person
    fill_in "Date", with: @shipment_pickup.date
    fill_in "Name", with: @shipment_pickup.name
    fill_in "Notes", with: @shipment_pickup.notes
    fill_in "Shipment", with: @shipment_pickup.shipment_id
    fill_in "State", with: @shipment_pickup.state
    fill_in "Street", with: @shipment_pickup.street
    fill_in "Zip", with: @shipment_pickup.zip
    click_on "Create Shipment pickup"

    assert_text "Shipment pickup was successfully created"
    click_on "Back"
  end

  test "updating a Shipment pickup" do
    visit shipment_pickups_url
    click_on "Edit", match: :first

    fill_in "City", with: @shipment_pickup.city
    fill_in "Contact Person", with: @shipment_pickup.contact_person
    fill_in "Date", with: @shipment_pickup.date
    fill_in "Name", with: @shipment_pickup.name
    fill_in "Notes", with: @shipment_pickup.notes
    fill_in "Shipment", with: @shipment_pickup.shipment_id
    fill_in "State", with: @shipment_pickup.state
    fill_in "Street", with: @shipment_pickup.street
    fill_in "Zip", with: @shipment_pickup.zip
    click_on "Update Shipment pickup"

    assert_text "Shipment pickup was successfully updated"
    click_on "Back"
  end

  test "destroying a Shipment pickup" do
    visit shipment_pickups_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Shipment pickup was successfully destroyed"
  end
end
