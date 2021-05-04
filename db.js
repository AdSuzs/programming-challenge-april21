const fs = require('fs');
const csv = require('fast-csv');
const models = require('./app/models/index');
const Movie = models.Movie;
const Genre = models.Genre;
const Rating = models.Rating;

try{
    var movies = [];

    fs.createReadStream(__dirname+"/dataset/movies.csv")
        .pipe(csv.parse({ headers: true }))
        .on('data', row => {
            var mov = {id: row[''], movieId: row.movieId, title: row.title, year: row.year};
            movies.push(mov);
        }) 
        .on('end', () => {
            // Save customers to MySQL/PostgreSQL dataset
            Movie.bulkCreate(movies);
        });
        
    
    const genres =  [];
    fs.createReadStream(__dirname+"/dataset/genres.csv")
        .pipe(csv.parse({ headers: true }))
        .on('data', row => {
            var mov = {id: row[''], movieId: row.movieId, genre: row.genre};
            genres.push(mov);
        })
        .on('end', () => {
            // Save customers to MySQL/PostgreSQL dataset
            Genre.bulkCreate(genres);
        });
} catch(error){
    console.log(error)
}

try{
    const ratings =  [];

    fs.createReadStream(__dirname+"/dataset/rating.csv")
    .pipe(csv.parse({ headers: true }))
    .on('data', row => {
        var mov = {id: row[''], movieId: row.movieId, rate: parseFloat(row.rate)};
        ratings.push(mov);
    })
    .on('end', () => {
        Rating.bulkCreate(ratings);
    });
}catch(error){
    console.log(error)
}