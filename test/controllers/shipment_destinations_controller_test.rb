require 'test_helper'

class ShipmentDestinationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shipment_destination = shipment_destinations(:one)
  end

  test "should get index" do
    get shipment_destinations_url
    assert_response :success
  end

  test "should get new" do
    get new_shipment_destination_url
    assert_response :success
  end

  test "should create shipment_destination" do
    assert_difference('ShipmentDestination.count') do
      post shipment_destinations_url, params: { shipment_destination: { city: @shipment_destination.city, contact_person: @shipment_destination.contact_person, date: @shipment_destination.date, name: @shipment_destination.name, notes: @shipment_destination.notes, shipment_id: @shipment_destination.shipment_id, state: @shipment_destination.state, street: @shipment_destination.street, zip: @shipment_destination.zip } }
    end

    assert_redirected_to shipment_destination_url(ShipmentDestination.last)
  end

  test "should show shipment_destination" do
    get shipment_destination_url(@shipment_destination)
    assert_response :success
  end

  test "should get edit" do
    get edit_shipment_destination_url(@shipment_destination)
    assert_response :success
  end

  test "should update shipment_destination" do
    patch shipment_destination_url(@shipment_destination), params: { shipment_destination: { city: @shipment_destination.city, contact_person: @shipment_destination.contact_person, date: @shipment_destination.date, name: @shipment_destination.name, notes: @shipment_destination.notes, shipment_id: @shipment_destination.shipment_id, state: @shipment_destination.state, street: @shipment_destination.street, zip: @shipment_destination.zip } }
    assert_redirected_to shipment_destination_url(@shipment_destination)
  end

  test "should destroy shipment_destination" do
    assert_difference('ShipmentDestination.count', -1) do
      delete shipment_destination_url(@shipment_destination)
    end

    assert_redirected_to shipment_destinations_url
  end
end
