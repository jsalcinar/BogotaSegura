# BogotaSegura
Aplicación de seguridad para Bogotá.

Esta aplicacion web esta escrita sobre:

* Ruby 2.5.1
* Rails 5.2.1
* Boostrap 4.1.3
* NodeJs 10.10.0
* ReactJs 16.4.2
* Yarn 1.9.4
* Postgresql 9.5.14

Para la utilizacion del programa despues de clonarlo, dentro de la carpeta asegurarse de ejecutar:

> bundle install

con el fin de instalar las gemas necesarias. Tambien ejecutar

> yarn install

con el fin de instalar los componentes necesarios para el uso de webpacker.

Crear un usuario en postgresql con el siguiente comando

> create role bogota with createdb login password 'segura';

Antes de correr la aplicacion por primera vez despues de la clonacion

> rails db:setup
> rails db:migrate

Si al realizar db:setup da un error como "FATAL:  Peer authentication failed for user "bogota"
" realizar la solucion que hay [aqui](https://askubuntu.com/questions/820792/peer-authentication-failed-for-user-with-all-privileges-in-postgres-9-5)
Para correr la aplicacion ejecutar

> rails server

y luego desde el navegador ir a
[localhost:3000](localhost:3000)
para visualizar la pagina.

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...