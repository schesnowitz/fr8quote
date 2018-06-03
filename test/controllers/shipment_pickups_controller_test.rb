require 'test_helper'

class ShipmentPickupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shipment_pickup = shipment_pickups(:one)
  end

  test "should get index" do
    get shipment_pickups_url
    assert_response :success
  end

  test "should get new" do
    get new_shipment_pickup_url
    assert_response :success
  end

  test "should create shipment_pickup" do
    assert_difference('ShipmentPickup.count') do
      post shipment_pickups_url, params: { shipment_pickup: { city: @shipment_pickup.city, contact_person: @shipment_pickup.contact_person, date: @shipment_pickup.date, name: @shipment_pickup.name, notes: @shipment_pickup.notes, shipment_id: @shipment_pickup.shipment_id, state: @shipment_pickup.state, street: @shipment_pickup.street, zip: @shipment_pickup.zip } }
    end

    assert_redirected_to shipment_pickup_url(ShipmentPickup.last)
  end

  test "should show shipment_pickup" do
    get shipment_pickup_url(@shipment_pickup)
    assert_response :success
  end

  test "should get edit" do
    get edit_shipment_pickup_url(@shipment_pickup)
    assert_response :success
  end

  test "should update shipment_pickup" do
    patch shipment_pickup_url(@shipment_pickup), params: { shipment_pickup: { city: @shipment_pickup.city, contact_person: @shipment_pickup.contact_person, date: @shipment_pickup.date, name: @shipment_pickup.name, notes: @shipment_pickup.notes, shipment_id: @shipment_pickup.shipment_id, state: @shipment_pickup.state, street: @shipment_pickup.street, zip: @shipment_pickup.zip } }
    assert_redirected_to shipment_pickup_url(@shipment_pickup)
  end

  test "should destroy shipment_pickup" do
    assert_difference('ShipmentPickup.count', -1) do
      delete shipment_pickup_url(@shipment_pickup)
    end

    assert_redirected_to shipment_pickups_url
  end
end
