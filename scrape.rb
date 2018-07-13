
  # require 'webdrivers'
  require 'capybara/poltergeist'
  


    # Capybara.default_driver = :selenium_chrome_headless
    session = Capybara::Session.new(:poltergeist)
    session.visit('https://www.youtube.com/watch?v=_DAxVr9A4TE')
    sleep 5
    session.within_fieldset :id do
      click '#icon-label'
    end
   

    puts session.current_url
    session.save_screenshot('video.png', full: true)   
