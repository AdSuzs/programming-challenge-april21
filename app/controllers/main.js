const models = require('../models/index');
const Sequelize = require('sequelize');
const Movie = models.Movie;
const Genre = models.Genre;
const Rating = models.Rating;
const Op = Sequelize.Op;

const index = async function(req, res){
  const conteudo = 'Página sobre a aplicação';
  res.render('index', {
    conteudo:conteudo,
    layout: 'layouts/layout'
  });
};

const search_year_genre = async function(req, res){
  var year = req.params.year;
  var genres = req.params.genre;

  const movie = await Movie.findAll({
    where: {year: year},
    include:[{
      model: Genre, 
      where: {genre: genres}
    }],
    atributes: ['movieId', 'title', 'year', 'genre']
  });
  res.render('search_year_genre', {
    movie: movie,
    layout: 'layouts/layout'
  });
};

const search_rating = async function(req, res){
  var num = req.params.num;

  const movie = await Rating.findAll({
    where:{rate: {[Op.lte]: 5.0}},
    include:[Movie],
    order: [['rate', 'DESC']],
    limit: parseInt(num), 
    offset: 0,
    atributes: ['movieId', 'title', 'rate']
  });
  res.render('search_ratings', {
    movie: movie,
    layout: 'layouts/layout'
  });
};

module.exports = {index, search_year_genre, search_rating};