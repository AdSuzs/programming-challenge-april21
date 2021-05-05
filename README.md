# Programming Challenge

This challenge consists of developing a web application. Read the instructions to execute the solution.

By: Ada Suzany Franco de Araújo

## Status

:rocket: Ready :rocket: 

## Getting Started
### Prerequisites

Before start, you need to get installed those tools:

- [Git](https://git-scm.com),
- [Node.js](https://nodejs.org/en).


### Executing

Fist you need to clone this repository with: `` git clone `` passing the url of this repository.

This project needs the following dependencies:
```
"@fortawesome/fontawesome-free": "^5.15.3",
    "bootstrap": "^4.6.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "fast-csv": "^4.3.6",
    "jquery": "^3.6.0",
    "node-sass-middleware": "^0.11.0",
    "nodemon": "^2.0.7",
    "popper.js": "^1.16.1",
    "sequelize": "^6.6.2",
    "sequelize-cli": "^6.2.0",
    "sqlite3": "^5.0.2"
    
```

To install all them execute:

$ npm install

To run the application, execute:

$ npm start

Then, open your browser. The application is running at port 4444:
`` http://localhost:4444/ ``


### API Requests

```
Endpoint:
GET http://localhost:4444/ 

To search for a movie:
GET http://localhost:4444/movie?year={year}&genre={genre} 

To rank movies:
GET http://localhost:4444/rating?num={number}

```

### Database

SQLite is used, so the database is already populated and is the file:
 ``database.sqlite3``. Which is ready to use.

To create and populate database we followed those steps:

- Download files ``movie.csv`` and ``rating.csv`` from [MovieLens](https://grouplens.org/datasets/movielens/) and save at ``/dataset``. 
- Execute the dataset treatment with:

$ cd database

$ python3 parser.py

That will create ``genres.csv`` file.

- After create the migrations with ``npx sequelize db:migrate`` we needed to populate it, executing:

$ node db.js


## Technologies

The following technologies were used in this project:
- [Node.js](https://nodejs.org/en/)
- [EJS](https://ejs.co/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Sass](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)
- [@fortawesome/fontawesome-free](https://fontawesome.com/)

## Screenshots
<h1 align='center'>
	<img src="./public/screenshots/index.png"/>
</h1>

<h1 align='center'>
	<img src="./public/screenshots/rating.png"/>
</h1>

<h1 align='center'>
	<img src="./public/screenshots/movies.png"/>
</h1>


