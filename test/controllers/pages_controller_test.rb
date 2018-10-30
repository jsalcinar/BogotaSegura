require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get tips2" do
    get pages_tips2_url
    assert_response :success
  end

end
