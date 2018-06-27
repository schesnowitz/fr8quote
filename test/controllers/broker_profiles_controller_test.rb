require 'test_helper'

class BrokerProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @broker_profile = broker_profiles(:one)
  end

  test "should get index" do
    get broker_profiles_url
    assert_response :success
  end

  test "should get new" do
    get new_broker_profile_url
    assert_response :success
  end

  test "should create broker_profile" do
    assert_difference('BrokerProfile.count') do
      post broker_profiles_url, params: { broker_profile: { city: @broker_profile.city, contact: @broker_profile.contact, email: @broker_profile.email, fax: @broker_profile.fax, logo: @broker_profile.logo, mc: @broker_profile.mc, name: @broker_profile.name, phone: @broker_profile.phone, state: @broker_profile.state, street: @broker_profile.street, website: @broker_profile.website, zip: @broker_profile.zip } }
    end

    assert_redirected_to broker_profile_url(BrokerProfile.last)
  end

  test "should show broker_profile" do
    get broker_profile_url(@broker_profile)
    assert_response :success
  end

  test "should get edit" do
    get edit_broker_profile_url(@broker_profile)
    assert_response :success
  end

  test "should update broker_profile" do
    patch broker_profile_url(@broker_profile), params: { broker_profile: { city: @broker_profile.city, contact: @broker_profile.contact, email: @broker_profile.email, fax: @broker_profile.fax, logo: @broker_profile.logo, mc: @broker_profile.mc, name: @broker_profile.name, phone: @broker_profile.phone, state: @broker_profile.state, street: @broker_profile.street, website: @broker_profile.website, zip: @broker_profile.zip } }
    assert_redirected_to broker_profile_url(@broker_profile)
  end

  test "should destroy broker_profile" do
    assert_difference('BrokerProfile.count', -1) do
      delete broker_profile_url(@broker_profile)
    end

    assert_redirected_to broker_profiles_url
  end
end
