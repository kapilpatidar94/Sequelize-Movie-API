'use strict';
const { directorArray } = require('../moviesDirectorsInsertion');

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('directors',directorArray)
  }
  ,

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('directors', null, {});
  }
};
