require 'test_helper'

class ShipperReceiversControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shipper_receiver = shipper_receivers(:one)
  end

  test "should get index" do
    get shipper_receivers_url
    assert_response :success
  end

  test "should get new" do
    get new_shipper_receiver_url
    assert_response :success
  end

  test "should create shipper_receiver" do
    assert_difference('ShipperReceiver.count') do
      post shipper_receivers_url, params: { shipper_receiver: { city: @shipper_receiver.city, contact_person: @shipper_receiver.contact_person, email: @shipper_receiver.email, name: @shipper_receiver.name, notes: @shipper_receiver.notes, state: @shipper_receiver.state, street: @shipper_receiver.street, url: @shipper_receiver.url, zip: @shipper_receiver.zip } }
    end

    assert_redirected_to shipper_receiver_url(ShipperReceiver.last)
  end

  test "should show shipper_receiver" do
    get shipper_receiver_url(@shipper_receiver)
    assert_response :success
  end

  test "should get edit" do
    get edit_shipper_receiver_url(@shipper_receiver)
    assert_response :success
  end

  test "should update shipper_receiver" do
    patch shipper_receiver_url(@shipper_receiver), params: { shipper_receiver: { city: @shipper_receiver.city, contact_person: @shipper_receiver.contact_person, email: @shipper_receiver.email, name: @shipper_receiver.name, notes: @shipper_receiver.notes, state: @shipper_receiver.state, street: @shipper_receiver.street, url: @shipper_receiver.url, zip: @shipper_receiver.zip } }
    assert_redirected_to shipper_receiver_url(@shipper_receiver)
  end

  test "should destroy shipper_receiver" do
    assert_difference('ShipperReceiver.count', -1) do
      delete shipper_receiver_url(@shipper_receiver)
    end

    assert_redirected_to shipper_receivers_url
  end
end
