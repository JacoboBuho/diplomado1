require 'test_helper'

class Diplomado1ControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
