'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    rank: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    runtime: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    metascore: DataTypes.FLOAT,
    votes: DataTypes.INTEGER,
    gross: DataTypes.INTEGER,
    director: DataTypes.STRING,
    actor: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};