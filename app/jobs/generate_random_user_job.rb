class GenerateRandomUserJob < ApplicationJob
  Capybara.default_driver = :selenium_chrome
  queue_as :default
  require 'capybara/poltergeist'
  


  def perform(*args)

    session = Capybara::Session.new(:poltergeist)

    session.visit('http://167.99.183.16/videos/1')

    # puts session.document.title
    sleep 10
    session.save_screenshot('image.png', full: true)



  end
end


   
