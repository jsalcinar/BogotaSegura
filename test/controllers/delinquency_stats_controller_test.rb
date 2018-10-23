require 'test_helper'

class DelinquencyStatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @delinquency_stat = delinquency_stats(:one)
  end

  test "should get index" do
    get delinquency_stats_url
    assert_response :success
  end

  test "should get new" do
    get new_delinquency_stat_url
    assert_response :success
  end

  test "should create delinquency_stat" do
    assert_difference('DelinquencyStat.count') do
      post delinquency_stats_url, params: { delinquency_stat: { injury_to_person: @delinquency_stat.injury_to_person, theft_to_bike: @delinquency_stat.theft_to_bike, theft_to_building: @delinquency_stat.theft_to_building, theft_to_car: @delinquency_stat.theft_to_car, theft_to_motorbike: @delinquency_stat.theft_to_motorbike, theft_to_person: @delinquency_stat.theft_to_person } }
    end

    assert_redirected_to delinquency_stat_url(DelinquencyStat.last)
  end

  test "should show delinquency_stat" do
    get delinquency_stat_url(@delinquency_stat)
    assert_response :success
  end

  test "should get edit" do
    get edit_delinquency_stat_url(@delinquency_stat)
    assert_response :success
  end

  test "should update delinquency_stat" do
    patch delinquency_stat_url(@delinquency_stat), params: { delinquency_stat: { injury_to_person: @delinquency_stat.injury_to_person, theft_to_bike: @delinquency_stat.theft_to_bike, theft_to_building: @delinquency_stat.theft_to_building, theft_to_car: @delinquency_stat.theft_to_car, theft_to_motorbike: @delinquency_stat.theft_to_motorbike, theft_to_person: @delinquency_stat.theft_to_person } }
    assert_redirected_to delinquency_stat_url(@delinquency_stat)
  end

  test "should destroy delinquency_stat" do
    assert_difference('DelinquencyStat.count', -1) do
      delete delinquency_stat_url(@delinquency_stat)
    end

    assert_redirected_to delinquency_stats_url
  end
end
