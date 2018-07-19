class PlayVideoJob < ApplicationJob
  require 'webdrivers'
  require 'capybara/poltergeist'
  
  queue_as :default


  def perform(*args)

    # Capybara.default_driver = :selenium_chrome_headless
    session = Capybara::Session.new(:poltergeist)
    session.visit('https://www.youtube.com/watch?v=_DAxVr9A4TE')

    sleep 502

    # session.driver.click(420, 540)

    # sleep 3

    # puts session.driver.network_traffic
    # session.find_button("Subscribe", visible: false).trigger('click')
    # sleep 3
    session.save_screenshot('video1.png', full: true)   

    # puts session.current_url
    
  end
end

# ArgumentError: invalid keys :visable, should be one of :count, :minimum, :maximum, :between, :text, :id, :class, :visible, :exact, :exact_text, :match, :wait, :filter_set, :disabled, :value, :title, :type


   
# :rack_test, :selenium, :selenium_chrome, :selenium_chrome_headless, :poltergeist