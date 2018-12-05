Rails.application.configure do
    config.lograge.enabled = true
    
    config.lograge.custom_options = lambda do |event|
        { time: event.time }
    end

    config.lograge.custom_payload do |controller|
        {
              host: controller.request.host,
              user_id: controller.current_user.try(:id)
        }
    end
end