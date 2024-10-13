//Import Express
import express from 'express';

//Route Imports
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import musicRoutes from './routes/musicRoutes.mjs'


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


//Route

app.get('/', (req, res) => {
    res.send(`Home Page`);
});



//Routes with app.use
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/music', musicRoutes);

//error handler
app.get('*', (req, res) => {
    res.send(`Page not found`);
});

//Listening
app.listen(PORT, err => {
    if (err) {
        return console.error("Error: ", err)
    }
    console.log(`Server is running on PORT ${PORT}.`)
})