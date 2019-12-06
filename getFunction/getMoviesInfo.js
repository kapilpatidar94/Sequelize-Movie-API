
const db = require('../models/index');
const movies = db.movies;
const getAllMovies = (req, res) => {
  movies.findAll()
    .then((data) => {
      res.status(200).send(data);

    }).catch((err) => {
      res.status(500).send(err);

    });
}

const getMovieById = (req, res) => {
  movies.findAll({
    where: {
      rank: req.params.movieId,
    },
  })
    .then((data) => {
      (data.length > 0) ? res.status(200).send(data) : res.sendStatus(404);
    }).catch((err) => {
      res.status(500).send(err);
    });

}

const addMovie = (req, res) => {
  const { body } = req;
  const dir = {

    title: body.title,
    description: body.description,
    runtime: body.runtime,
    genre: body.genre,
    rating: body.rating,
    metascore: body.metascore,
    votes: body.votes,
    gross: body.gross,
    director: body.director,
    actor: body.actor,
    year: body.year,
  }
  movies.create(dir).then((data) => {
    res.status(202).send(`Last person added whose rank is: ${data.null}`);
  }).catch(() => {
    res.sendStatus(500);
  });
}



const updateMovieById = (req, res) => {
  const { body } = req;
  const dir = {
    title: body.title,
    description: body.description,
    runtime: body.runtime,
    genre: body.genre,
    rating: body.rating,
    metascore: body.metascore,
    votes: body.votes,
    gross: body.gross,
    director: body.director,
    actor: body.actor,
    year: body.year,
  };
  movies.update(dir, { where: { rank: req.params.movieId } })
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
const deleteMovieById = (req, res) => {
  movies.destroy({
    where: {
      rank: req.params.movieId,
    }
  }
  ).then((data) => {
    if (data === 1) {
      res.status(202).send(`Person data deleted, who's ID is: ${req.params.movieId}`);
    } else { res.sendStatus(404); }
  }).catch(() => {
    res.sendStatus(500);
  });
}

module.exports = {
  getAllMovies,
  addMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById,
};
