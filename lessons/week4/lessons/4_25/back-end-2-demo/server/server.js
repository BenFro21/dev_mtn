const express = require('express');
const cors = require('cors');

// Initalizing the express as an app
const app = express();




//midleware
app.use(cors());
app.use(express.json());

const movieCtrl = require('./controllers/userCtrl')
const {getAllMovies, createMovie, deleteMovie, updateMovie} = movieCtrl;


//routes 
app.get('/api/movies', getAllMovies)
app.post('/api/movies', createMovie)
app.delete('/api/movies/:id', deleteMovie)
app.put('/api/movies/:id', updateMovie)



app.listen(4004, () => console.log(`jamin on port 4004`));