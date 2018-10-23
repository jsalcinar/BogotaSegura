json.extract! route, :id, :name, :start, :destination, :score, :created_at, :updated_at
json.url route_url(route, format: :json)
