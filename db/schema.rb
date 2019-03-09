# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_08_190507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "user_name"
    t.text "body"
    t.integer "score"
    t.bigint "site_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_comments_on_site_id"
  end

  create_table "delinquency_stats", force: :cascade do |t|
    t.integer "theft_to_person"
    t.integer "theft_to_car"
    t.integer "theft_to_motorbike"
    t.integer "theft_to_bike"
    t.integer "theft_to_building"
    t.integer "injury_to_person"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "zone_id"
    t.index ["zone_id"], name: "index_delinquency_stats_on_zone_id"
  end

  create_table "reports", force: :cascade do |t|
    t.text "description"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "reports_zones", id: false, force: :cascade do |t|
    t.bigint "zone_id", null: false
    t.bigint "report_id", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "name"
    t.string "start"
    t.string "destination"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "routes_zones", id: false, force: :cascade do |t|
    t.bigint "zone_id", null: false
    t.bigint "route_id", null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string "name"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tips", force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "transportmode"
  end

  create_table "tips_zones", id: false, force: :cascade do |t|
    t.bigint "zone_id", null: false
    t.bigint "tip_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.boolean "admin", default: false
    t.string "avatar", default: "image/upload/v1541084536/bogotasegura/avatar/default/User.png"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "zones", force: :cascade do |t|
    t.string "coordinate"
    t.string "name"
    t.integer "CAI"
    t.integer "user_score"
    t.string "influx"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "sites"
  add_foreign_key "delinquency_stats", "zones"
  add_foreign_key "reports", "users"
  add_foreign_key "routes", "users"
end
