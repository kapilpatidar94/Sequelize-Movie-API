
var db = require('../models/index');
const directors = db.directors;

// GET all Directors
const getAllDirectors = (req, res) => {
  directors.findAll()
    .then((data) => {
      res.status(200).send(data);

    }).catch((err) => {
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
      (data.length > 0) ? res.status(200).send(data) : res.sendStatus(404);
    }).catch((err) => {
      res.status(500).send(err);
    });
};

// POST: Add directors
const addDirector = (req, res) => {
  const { body } = req;
  const dir = {
    director_name: body.director
  };
  directors.create(dir).then((data) => {
    res.status(202).send(`Last person added whose id is: ${data.id}`);
  }).catch(() => {
    res.sendStatus(500);
  });

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
    } else { res.sendStatus(404); }
  }).catch(() => {
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
