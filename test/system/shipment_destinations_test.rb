require "application_system_test_case"

class ShipmentDestinationsTest < ApplicationSystemTestCase
  setup do
    @shipment_destination = shipment_destinations(:one)
  end

  test "visiting the index" do
    visit shipment_destinations_url
    assert_selector "h1", text: "Shipment Destinations"
  end

  test "creating a Shipment destination" do
    visit shipment_destinations_url
    click_on "New Shipment Destination"

    fill_in "City", with: @shipment_destination.city
    fill_in "Contact Person", with: @shipment_destination.contact_person
    fill_in "Date", with: @shipment_destination.date
    fill_in "Name", with: @shipment_destination.name
    fill_in "Notes", with: @shipment_destination.notes
    fill_in "Shipment", with: @shipment_destination.shipment_id
    fill_in "State", with: @shipment_destination.state
    fill_in "Street", with: @shipment_destination.street
    fill_in "Zip", with: @shipment_destination.zip
    click_on "Create Shipment destination"

    assert_text "Shipment destination was successfully created"
    click_on "Back"
  end

  test "updating a Shipment destination" do
    visit shipment_destinations_url
    click_on "Edit", match: :first

    fill_in "City", with: @shipment_destination.city
    fill_in "Contact Person", with: @shipment_destination.contact_person
    fill_in "Date", with: @shipment_destination.date
    fill_in "Name", with: @shipment_destination.name
    fill_in "Notes", with: @shipment_destination.notes
    fill_in "Shipment", with: @shipment_destination.shipment_id
    fill_in "State", with: @shipment_destination.state
    fill_in "Street", with: @shipment_destination.street
    fill_in "Zip", with: @shipment_destination.zip
    click_on "Update Shipment destination"

    assert_text "Shipment destination was successfully updated"
    click_on "Back"
  end

  test "destroying a Shipment destination" do
    visit shipment_destinations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Shipment destination was successfully destroyed"
  end
end
