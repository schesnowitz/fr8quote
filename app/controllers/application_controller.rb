class ApplicationController < ActionController::Base
  before_action :app_setting

  def app_setting
    @app_setting = AppSetting.find(1)
  end

  def the_fallback
    flash[:danger] = 'You are not authorized to access this area'
    redirect_back(fallback_location: root_path)
  end 
end