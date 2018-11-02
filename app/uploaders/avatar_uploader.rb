class AvatarUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
  
  # Antes de subir la imagen a la nube
  process :convert => 'png'
  process :tags => ['avatar_picture']
  cloudinary_transformation :transformation => [
    {:width => 720, :height => 720, :crop => :fill},
    {:quality=>"auto"}
  ]  


  version :standard do
    process :fetch_format => :auto
  end

  version :thumbnail do
    process :resize_to_fit => [40, 40]
    process :fetch_format => :auto
  end
  
  # Link imagen
  def public_id
    return "bogotasegura/avatar/users/"+model.username+"_avatar"
  end  

  def extension_whitelist
   %w(jpg jpeg gif png)
  end
  
end
