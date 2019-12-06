const { logger } = require('../winston');

var db = require('../models/index');
const directors = db.directors;
// logger.info('fghjhbhj')

// GET all Directors
const getAllDirectors = (req, res) => {
  directors.findAll()
    .then((data) => {
      res.status(200).send(data);

    }).catch((err) => {
      logger.error(err);
      res.status(500).send(err);

    });
}

//GET Directors by ID
const getDirectorById = (req, res) => {
  directors.findAll({
    where: {
      id: req.params.directorId,
    },
  })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send(data)
      } else {
        res.status(404).send('data not found');
        logger.error({
          message: 'Directors ID not found'
        });
      } 
    }).catch((err) => {
      logger.error(err);
      res.sendStatus(500);
    });
};

// POST: Add directors
const addDirector = (req, res) => {
  const { body } = req;
  const dir = {
    director_name: body.director
  };
  if(dir.director_name===undefined){
    logger.error({
      message: 'Data Insufficient.'
    });
  res.status(404).send('Enter sufficient Data');}
  else{
  directors.create(dir).then((data) => {
    res.status(202).send(`Last person added whose id is: ${data.id}`);
  }).catch((err) => {
    logger.error(err);
    res.sendStatus(500);
  });
}

}

// PUT: Update director data by ID
const updateDirectorById = (req, res) => {
  const { body } = req;
  const dir = {
    director_name: body.director
  }
  directors.update(dir, { where: { id: req.params.directorId } })
    .then((data) => {

      if (data[0] === 0) {
        logger.error({
          message: 'Data not found'
        });
        res.sendStatus(404);
      } else {
        res.sendStatus(202);
      }
    }).catch(() => {
      res.sendStatus(500);
    });
}

// DELETE: Director data by ID
const deleteDirectorById = (req, res) => {
  directors.destroy({
    where: {
      id: req.params.directorId,
    }
  }
  ).then((data) => {
    if (data === 1) {
      res.status(202).send(`Person data deleted, who's ID is: ${req.params.directorId}`);
    } else { 
      logger.error({
        message:'Data not found for Delete.'
      })
      res.sendStatus(404); }
  }).catch((err) => {
    logger.error(err);
    res.sendStatus(500);
  });
}

module.exports = {
  getAllDirectors,
  getDirectorById,
  addDirector,
  updateDirectorById,
  deleteDirectorById,
};
