require "administrate/base_dashboard"

class ZoneDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    delinquency_stat: Field::HasOne,
    tips: Field::HasMany,
    routes: Field::HasMany,
    reports: Field::HasMany,
    id: Field::Number,
    coordinate: Field::String,
    name: Field::String,
    CAI: Field::Number,
    user_score: Field::Number,
    influx: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :delinquency_stat,
    :tips,
    :routes,
    :reports,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :delinquency_stat,
    :tips,
    :routes,
    :reports,
    :id,
    :coordinate,
    :name,
    :CAI,
    :user_score,
    :influx,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :delinquency_stat,
    :tips,
    :routes,
    :reports,
    :coordinate,
    :name,
    :CAI,
    :user_score,
    :influx,
  ].freeze

  # Overwrite this method to customize how zones are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(zone)
  #   "Zone ##{zone.id}"
  # end
end
