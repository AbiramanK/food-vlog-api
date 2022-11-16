### Food Vlog API v1.0
Fetch the latest food vlog videos, updates, etc.,

#### Project overview
The api fetch the latest videos about food vlog from youtube and stored in our database. In this project we are using Typescript, Apollo Server, Graphql, type-graphql, Sequelize, etc.,

#### Project Requirement 
* node >= v18.12.1

#### Project kick start
1. First clone the project 
2. Open terminal and navigate to the root of the project
3. Copy the .env.sample to .env and update it based on your necessity 
4. Then run the follow commands ***[note: Here, I am using yarn. If you wish you can use something familiar to you]***
	```
	yarn install
	yarn db:migrate
	yarn dev
	```

The graphql development server will starts at http://localhost:8000

#### Available scripts
* ### yarn dev
	* Start a development server
* ### yarn build
	* Compile the files from typescript to javascript
* ### yarn start 
	* Build a project and Start production server
* ### yarn queue
	* Fetch required food vlog data from sources
* ### yarn migration:new
	* Generate new migration file
* ### yarn migration:compile
	* Compile the migration files from typescript to javascript ***[Note: Sequelize only works with the javascript files]***
* ### yarn db:migrate
	* Compile the migration files and update (migrate) the migration file to database
* ###  yarn db:migrate
	 * Compile the migration files and revert the last one migration
