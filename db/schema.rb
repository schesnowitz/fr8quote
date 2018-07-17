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

ActiveRecord::Schema.define(version: 2018_06_17_230713) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "app_settings", force: :cascade do |t|
    t.string "theme_color"
    t.boolean "hidden_sidebar", default: false
    t.boolean "boxed_content", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shipment_destinations", force: :cascade do |t|
    t.date "destination_date"
    t.string "destination_name"
    t.string "destination_street"
    t.string "destination_city"
    t.string "destination_state"
    t.string "destination_zip"
    t.string "destination_contact_person"
    t.string "destination_notes"
    t.integer "destination_shipment_id"
    t.integer "destination_count"
    t.string "destination_drop"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shipment_origins", force: :cascade do |t|
    t.date "origin_date"
    t.string "origin_name"
    t.string "origin_street"
    t.string "origin_city"
    t.string "origin_state"
    t.string "origin_zip"
    t.string "origin_contact_person"
    t.string "origin_notes"
    t.integer "shipment_id"
    t.integer "origin_count"
    t.string "origin_drop"
    t.boolean "enter_manually", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shipment_id"], name: "index_shipment_origins_on_shipment_id"
  end

  create_table "shipments", force: :cascade do |t|
    t.string "commodity"
    t.string "weight"
    t.string "miles_or_km"
    t.string "load_size"
    t.decimal "miles"
    t.decimal "kilometers"
    t.decimal "invoice_price"
    t.decimal "booking_fee"
    t.decimal "percent_deducted"
    t.decimal "total_company_expenses"
    t.decimal "rate_to_owner_operator"
    t.decimal "percent_coverted_to_dollars"
    t.decimal "driver_cents_pm"
    t.decimal "rate_after_booking_fee"
    t.decimal "agent_fee"
    t.date "pick_up_date"
    t.time "pick_up_time"
    t.date "delivery_date"
    t.time "delivery_time"
    t.string "delivery_notes"
    t.string "equipment_type"
    t.string "status_name"
    t.string "updated_by"
    t.string "special_instructions"
    t.string "dimentions"
    t.string "origin_street"
    t.string "origin_city"
    t.string "origin_state_provence"
    t.string "origin_postal_code"
    t.string "origin_phone"
    t.string "origin_contact"
    t.string "destination_street"
    t.string "destination_city"
    t.string "destination_state_provence"
    t.string "destination_postal_code"
    t.string "destination_phone"
    t.string "destination_contact"
    t.string "shipper_company_name"
    t.string "receiver_company_name"
    t.float "origin_latitude"
    t.float "origin_longitude"
    t.float "destination_latitude"
    t.float "destination_longitude"
    t.integer "percentage_id"
    t.decimal "kilograms"
    t.decimal "pounds"
    t.boolean "is_kilograms"
    t.boolean "is_pounds"
    t.boolean "is_hazmat"
    t.boolean "needs_temp_control"
    t.boolean "is_fahrenheit"
    t.boolean "is_celsius"
    t.decimal "fahrenheit"
    t.decimal "celsius"
    t.string "pick_up_notes"
    t.string "broker_shipper_load_id"
    t.integer "driver_id"
    t.integer "broker_profile_id"
    t.integer "dispatcher_id"
    t.integer "vehcile_id"
    t.string "description"
    t.string "broker_rep_name"
    t.string "broker_rep_email"
    t.string "broker_rep_number"
    t.string "broker_rep_cell"
    t.string "broker_after_hours_instructions"
    t.boolean "has_multiple_pd"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["broker_profile_id"], name: "index_shipments_on_broker_profile_id"
    t.index ["dispatcher_id"], name: "index_shipments_on_dispatcher_id"
    t.index ["driver_id"], name: "index_shipments_on_driver_id"
    t.index ["vehcile_id"], name: "index_shipments_on_vehcile_id"
  end

  create_table "shipper_receivers", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "contact_person"
    t.string "notes"
    t.string "email"
    t.string "url"
    t.string "telephone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shipperizations", force: :cascade do |t|
    t.integer "shipment_id"
    t.integer "shipper_receiver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
