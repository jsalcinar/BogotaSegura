class ApplicationMailer < ActionMailer::Base
  def confirm_user(user)
    @user = user
    mg_client = Mailgun::Client.new ENV['api_key']
    message_params = {:from    => ENV['gmail_username'],
                      :to      => @user.email,
                      :subject => 'Sign up confirmado',
                      :text    => 'Welcome to BogotaSegura'}
    mg_client.send_message ENV['domain'], message_params
  end
end
