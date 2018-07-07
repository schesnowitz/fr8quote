json.extract! video, :id, :url, :string1, :string2, :created_at, :updated_at
json.url video_url(video, format: :json)
