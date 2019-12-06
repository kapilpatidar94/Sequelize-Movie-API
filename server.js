const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);

const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'accessError.log'),{ flag: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));

const {
    getAllDirectors,
    getDirectorById,
    addDirector,
    updateDirectorById,
    deleteDirectorById,
} = require('./getFunction/getDirectorsInfo');

app.get('/directors', getAllDirectors);
app.get('/directors/:directorId', getDirectorById);
app.post('/directors', addDirector);
app.put('/directors/:directorId', updateDirectorById);
app.delete('/directors/:directorId', deleteDirectorById);

const {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
} = require('./getFunction/getMoviesInfo');

app.get('/movies', getAllMovies);
app.get('/movies/:movieId', getMovieById);
app.post('/movies', addMovie);
app.put('/movies/:movieId', updateMovieById);
app.delete('/movies/:movieId', deleteMovieById);
