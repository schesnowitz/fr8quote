require "application_system_test_case"

class BrokerProfilesTest < ApplicationSystemTestCase
  setup do
    @broker_profile = broker_profiles(:one)
  end

  test "visiting the index" do
    visit broker_profiles_url
    assert_selector "h1", text: "Broker Profiles"
  end

  test "creating a Broker profile" do
    visit broker_profiles_url
    click_on "New Broker Profile"

    fill_in "City", with: @broker_profile.city
    fill_in "Contact", with: @broker_profile.contact
    fill_in "Email", with: @broker_profile.email
    fill_in "Fax", with: @broker_profile.fax
    fill_in "Logo", with: @broker_profile.logo
    fill_in "Mc", with: @broker_profile.mc
    fill_in "Name", with: @broker_profile.name
    fill_in "Phone", with: @broker_profile.phone
    fill_in "State", with: @broker_profile.state
    fill_in "Street", with: @broker_profile.street
    fill_in "Website", with: @broker_profile.website
    fill_in "Zip", with: @broker_profile.zip
    click_on "Create Broker profile"

    assert_text "Broker profile was successfully created"
    click_on "Back"
  end

  test "updating a Broker profile" do
    visit broker_profiles_url
    click_on "Edit", match: :first

    fill_in "City", with: @broker_profile.city
    fill_in "Contact", with: @broker_profile.contact
    fill_in "Email", with: @broker_profile.email
    fill_in "Fax", with: @broker_profile.fax
    fill_in "Logo", with: @broker_profile.logo
    fill_in "Mc", with: @broker_profile.mc
    fill_in "Name", with: @broker_profile.name
    fill_in "Phone", with: @broker_profile.phone
    fill_in "State", with: @broker_profile.state
    fill_in "Street", with: @broker_profile.street
    fill_in "Website", with: @broker_profile.website
    fill_in "Zip", with: @broker_profile.zip
    click_on "Update Broker profile"

    assert_text "Broker profile was successfully updated"
    click_on "Back"
  end

  test "destroying a Broker profile" do
    visit broker_profiles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Broker profile was successfully destroyed"
  end
end
