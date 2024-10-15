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


// patch
router.patch('/:year', (req, res, next) => {
    const music1 = music.find((m, i) => {
      if (m.date == req.params.year) {
        for (const key in req.body) {
          music[i][key] = req.body[key];
        }
        return true;
      }
    });
  
    if (music) res.json(music);
    else next();
  });


//del
router.delete('/:year', (req, res, next) => {
    const music1 = music.find((m, i) => {
      if (m.year == req.params.year) {
        music.splice(i, 1);
        return true;
      }
    });
  
    if (music) res.json(music);
    else next();
  });



//export
export default router
