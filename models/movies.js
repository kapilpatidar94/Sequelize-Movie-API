'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    rank: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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
  }, {
    timestamps: false
  });
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};