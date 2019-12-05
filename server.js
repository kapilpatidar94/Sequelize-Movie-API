const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8081);

const {
  getAllMovies,
  addMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} = require('./express/movies');
const {
  getAllDirectors,
  addDirector,
  getDirectorById,
  updateDirectorById,
  deleteDirectorById,
} = require('./express/directors');

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/api/movies', getAllMovies)
  .post('/api/movies', addMovie)
  .get('/api/movies/:movieId', getMovieById)
  .put('/api/movies/:movieId', updateMovieById)
  .delete('/api/movies/:movieId', deleteMovieById);

app.get('/api/directors', getAllDirectors)
  .post('/api/directors', addDirector)
  .get('/api/directors/:directorId', getDirectorById)
  .put('/api/directors/:directorId', updateDirectorById)
  .delete('/api/directors/:directorId', deleteDirectorById);
