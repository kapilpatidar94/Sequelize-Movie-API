const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);

const {
    getAllDirectors,
    getDirectorById,
    addDirector,
    updateDirectorById,
    deleteDirectorById,
} = require('./getFunction/getDirectorsInfo');

app.get('/directors', getAllDirectors)
    .get('/directors/:directorId', getDirectorById)
    .post('/directors', addDirector)
    .put('/directors/:directorId', updateDirectorById)
    .delete('/directors/:directorId', deleteDirectorById);

const {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
} = require('./getFunction/getMoviesInfo');

app.get('/movies', getAllMovies)
    .get('/movies/:movieId', getMovieById)
    .post('/movies', addMovie)
    .put('/movies/:movieId', updateMovieById)
    .delete('/movies/:movieId', deleteMovieById);
