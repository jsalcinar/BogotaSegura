# BogotaSegura
Aplicación de seguridad para Bogotá.

Para el correcto funcionamiento de la aplicacion, tener instalado:

* Ruby 2.5.1
* Rails 5.2.1
* NodeJs 10.x
* Postgresql 9.5.x
* Yarn 1.10.x

Al clonar el proyecto por primera vez instalar las gemas requeridas al ejecutar dentro de la carpeta de la aplicacion:

> bundle install

Para el uso de la base Posgresql primero crear un usuario con los siguientes comandos:

> sudo -u postgres psql

> create role bogota with superuser login password 'segura';

Si es la primera vez que se tiene la aplicacion en el equipo usar:

> rails db:setup

Si ya se habia clonado antes, realizar:

> rails db:reset

Luego migrar la db con:

> rails db:migrate

Si al realizar alguno de los comandos anteriores, da un error similar a este:

> ** FATAL:  Peer authentication failed for user "bogota"
** 

Realizar la solucion mencionada [aqui](https://askubuntu.com/questions/820792/peer-authentication-failed-for-user-with-all-privileges-in-postgres-9-5).

Para poblar la db ejecutar:

> rails db:seed

Para correr la aplicacion ejecutar

> rails server

Desde el navegador visitar
[localhost:3000](localhost:3000)
para visualizar la pagina.

La aplicacion se puede probar desde [Heroku](https://bogotasegura2018.herokuapp.com/).