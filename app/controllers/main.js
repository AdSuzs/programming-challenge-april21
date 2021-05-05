const models = require('../models/index');
const Sequelize = require('sequelize');
const Movie = models.Movie;
const Genre = models.Genre;
const Rating = models.Rating;
const Op = Sequelize.Op;
const genreType = ['Fantasy', 'Action', 'Crime', 'Musical', 'Adventure', 'Mystery', 'IMAX', 'Western', 'Romance', 'Sci-Fi', 'War', 'Drama', 'Children', 'Documentary','Thriller', 'Comedy', 'Film-Noir', 'Animation', 'Horror', '(no genres listed'];

const index = async function(req, res){

  res.render('index', {
    genres: genreType,
    layout: 'layouts/layout'
  });
};

const search_year_genre = async function(req, res){
  var year = req.query['year'];
  var genres = req.query['genre'];
  
  if(!year || !genres){
    movie = null;
  }
  else{
  movie = await Movie.findAll({
    where: {year: year},
    include:[{
      model: Genre, 
      where: {genre: genres},
      required: true
    }],
    atributes: ['movieId', 'title', 'year', 'genre']
  });
}
  res.render('search_year_genre', {
    genres: genreType,
    yearMov: year,
    genreMov: genres,
    movie: movie,
    layout: 'layouts/layout'
  });
};

const search_rating = async function(req, res){
  var num = req.query['num'];
  const movie = await Rating.findAll({
    where:{rate: {[Op.lte]: 5.0}},
    include:[{
      model: Movie,
      required: true
    }],
    order: [['rate', 'DESC']],
    limit: parseInt(num), 
    offset: 0,
    atributes: ['movieId', 'title', 'rate']
  });
  
  console.log(movie);
  res.render('search_ratings', {
    number: num,
    movie: movie,
    layout: 'layouts/layout'
  });
};

module.exports = {index, search_year_genre, search_rating};