'use strict';
module.exports = (sequelize, DataTypes) => {
  const directors = sequelize.define('directors', {
    director_name: DataTypes.STRING
  }, {});
  directors.associate = function(models) {
    // associations can be defined here
  };
  return directors;
};