'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Genre,{
        foreignKey:"movieId",
        sourceKey:"movieId"
      });
      this.hasMany(models.Rating, {
        foreignKey:"movieId",
        sourceKey:"movieId"
      });
    }
  };
  Movie.init({
    movieId: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};