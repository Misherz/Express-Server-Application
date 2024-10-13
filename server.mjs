//Import Express
import express from 'express';

//Route Imports
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import musicRoutes from './routes/musicRoutes.mjs'
import error from './data/error.mjs';


//Create an instance/Initialize Express in a variable
const app = express();
const PORT = 5000;

//Middleware

//Logging middleware to keep track out routes during testing
function keepTrack(req, res, next) {
    console.log(`Logging Middleware: ${req.originalUrl}`);
    next();
}

app.use(keepTrack)

//error handling middleware



//Route

app.get('/', (req, res) => {
    res.send(`Home Page`);
});

app.get('/users ', (req, res) => {
    res.send(`User's Page`);
});

app.get('/music ', (req, res) => {
    res.send(`Music Page`);
});

app.get('/error ', (req, res) => {
    res.send(`Error Page`);
});

//Listening
app.listen(PORT, err => {
    if (err) {
        return console.error("Error: ", err)
    }
    console.log(`Server is running on PORT ${PORT}.`)
})