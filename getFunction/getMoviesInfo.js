const { logger } = require('../winston');

const db = require('../models/index');
const movies = db.movies;

// GET: all movies
const getAllMovies = (req, res) => {
  movies.findAll()
    .then((data) => {
      res.status(200).send(data);

    }).catch((err) => {
      res.status(500).send(err);
      logger.error({
        message: 'Server Error.'
      });

    });
}

// GET: movie by ID
const getMovieById = (req, res) => {
  movies.findAll({
    where: {
      rank: req.params.movieId,
    },
  })
    .then((data) => {
      if(data.length > 0){
        res.status(200).send(data);
      }
      else {  
        res.status(404).send('data not found');
        logger.error({
          message:'Movies ID Not found'
        });
      }
    }).catch((err) => {
      res.status(500).send(err);
      logger.error({
        message: 'Server Error.'
      });
    });

}

// POST: add movie
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
    logger.error({
      message: 'Server Error'
    });
  });
}


// PUT: update movie data
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
        logger.error({
          message: 'Data Not found for update'
        });
      } else {
        res.sendStatus(202);
      }
    }).catch(() => {
      res.sendStatus(500);
    });
}

// DELETE: delete movie data by ID
const deleteMovieById = (req, res) => {
  movies.destroy({
    where: {
      rank: req.params.movieId,
    }
  }
  ).then((data) => {
    if (data === 1) {
      res.status(202).send(`Person data deleted, who's ID is: ${req.params.movieId}`);
    } else { 
      res.sendStatus(404);
      logger.error(
        {
          message: 'Deleted Data not found'
        }
      ); 
    }
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
