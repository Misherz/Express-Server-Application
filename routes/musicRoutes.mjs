//Import users
import express from 'express';

//import data from users
import { music } from '../data/music.mjs'

//Put  it into a variable to export
let router = express.Router();
router.use(express.json());


//get
router.get('/', (req, res) => {
    res.json(music);
});

//post
router.post('/', (req, res) => {
    if (req.body.artist && req.body.song && req.body.year) {
    const musicData = {
        artist: req.body.artist,
        song: req.body.song,
        year: req.body.year,
    };

    music.push(musicData)
    res.send('Song added!');
    
}else {
    res.status(400).send('Missing required fields');
}
});
//put


//delete

//export
export default router
