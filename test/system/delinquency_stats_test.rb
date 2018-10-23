require "application_system_test_case"

class DelinquencyStatsTest < ApplicationSystemTestCase
  setup do
    @delinquency_stat = delinquency_stats(:one)
  end

  test "visiting the index" do
    visit delinquency_stats_url
    assert_selector "h1", text: "Delinquency Stats"
  end

  test "creating a Delinquency stat" do
    visit delinquency_stats_url
    click_on "New Delinquency Stat"

    fill_in "Injury To Person", with: @delinquency_stat.injury_to_person
    fill_in "Theft To Bike", with: @delinquency_stat.theft_to_bike
    fill_in "Theft To Building", with: @delinquency_stat.theft_to_building
    fill_in "Theft To Car", with: @delinquency_stat.theft_to_car
    fill_in "Theft To Motorbike", with: @delinquency_stat.theft_to_motorbike
    fill_in "Theft To Person", with: @delinquency_stat.theft_to_person
    click_on "Create Delinquency stat"

    assert_text "Delinquency stat was successfully created"
    click_on "Back"
  end

  test "updating a Delinquency stat" do
    visit delinquency_stats_url
    click_on "Edit", match: :first

    fill_in "Injury To Person", with: @delinquency_stat.injury_to_person
    fill_in "Theft To Bike", with: @delinquency_stat.theft_to_bike
    fill_in "Theft To Building", with: @delinquency_stat.theft_to_building
    fill_in "Theft To Car", with: @delinquency_stat.theft_to_car
    fill_in "Theft To Motorbike", with: @delinquency_stat.theft_to_motorbike
    fill_in "Theft To Person", with: @delinquency_stat.theft_to_person
    click_on "Update Delinquency stat"

    assert_text "Delinquency stat was successfully updated"
    click_on "Back"
  end

  test "destroying a Delinquency stat" do
    visit delinquency_stats_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Delinquency stat was successfully destroyed"
  end
end
