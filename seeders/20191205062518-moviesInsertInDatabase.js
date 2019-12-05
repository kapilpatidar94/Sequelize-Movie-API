'use strict';
const { moviesArray } = require('../moviesDirectorsInsertion');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('movies',moviesArray);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('movies',null,{});
  }
};
