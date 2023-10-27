# CRUD
create a crud application with jwt token

There are two folder

The user folder which has a CRUD power.

To start the system, kindly configure the dbconfig.js to point on the right database that you are using also you need to uncomment the "sequelize.sync" (line 25) to sync or create the tables in your database, after configuring it you need this command.
-npm i
-npm start

then the system will start and you may now try the routes that are available in routes folder.

*you need first to create a dummy data in your database that will be your access to login to use the CRUD of it

NOTE:
comment the "sequelize.sync" again so that you won't need to sync it everytime you start the project.
PLEASE RUN THE JWT together so that it wont have any errors


The JWT folder is to validate the token
To start the system, kindly configure the dbconfig.js to point on the right database that you are using also you need to uncomment the "sequelize.sync" (line 25) to sync or create the tables in your database, after configuring it you need this command.

-npm i
-npm start

then the system will start and you may now try the routes that are available in routes folder.

NOTE:
comment the "sequelize.sync" again so that you won't need to sync it everytime you start the project.
