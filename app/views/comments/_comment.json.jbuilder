json.extract! comment, :id, :user_name, :body, :site_id, :score, :created_at, :updated_at
json.url comment_url(comment, format: :json)
