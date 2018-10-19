# BogotaSegura
Aplicación de seguridad para Bogotá.

Esta aplicacion web esta escrita sobre:

* Ruby 2.5.1
* Rails 5.2.1
* Boostrap 4.x
* NodeJs 10.x
* ReactJs 16.x
* Yarn 1.10.x
* Postgresql 9.5.x

Para el correcto funcionamiento de la aplicacion, tener instalado:

* Ruby 2.5.1
* Rails 5.2.1
* NodeJs 10.x
* Postgresql 9.5.x

Al clonar el proyecto por primera vez instalar las gemas requeridas al ejecutar dentro de la carpeta de la aplicacion:

> bundle install

Para actualizar  los componentes webpacker:

> yarn install

Para el uso de la base Posgresql primero crear un usuario con los siguientes comandos:

> sudo -u postgres psql

> postgres=# create role bogota with createdb login password 'segura';

Luego configurar la base de datos de la aplicacion con:

> rails db:setup

> rails db:migrate

Si al realizar db:setup da un error tal como 

> ** FATAL:  Peer authentication failed for user "bogota"
** 

Realizar la solucion mencionada [aqui](https://askubuntu.com/questions/820792/peer-authentication-failed-for-user-with-all-privileges-in-postgres-9-5).

Para correr la aplicacion ejecutar

> rails server

Desde el navegador visitar
[localhost:3000](localhost:3000)
para visualizar la pagina.

Nota: En heroku no funciona la localizacion de google maps.