class HomeController < ApplicationController
  before_action :authenticate_user!, except: %i[status index cookies landing_page not_permitted]

  def index; end

  def status
    render layout: false
  end

  def cookies; end

  def not_permitted
    @permission_required = params[:permission_required]
  end
end
