//Import Express
import express from 'express';

//Route Imports
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import musicRoutes from './routes/musicRoutes.mjs'

//import pug for template use
import pug from "pug";

//import body parser
import bodyParser from 'body-parser';


//Create an instance/Initialize Express in a variable
const app = express();
const PORT = 5000;

//import styles
app.use(express.static('./styles'));
app.use(express.static('./imgs/'));


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Logging middleware to keep track out routes during testing
function keepTrack(req, res, next) {
    console.log(`Logging Middleware: ${req.originalUrl}`);
    next();
}

app.use(keepTrack)

//setting view engine
app.set('view engine', 'pug');
app.set('views', './views')

//testing
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('homepg');
    // res.send(`Home Page`);
});

//Route
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