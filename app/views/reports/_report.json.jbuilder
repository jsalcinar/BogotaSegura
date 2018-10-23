json.extract! report, :id, :description, :score, :created_at, :updated_at
json.url report_url(report, format: :json)
