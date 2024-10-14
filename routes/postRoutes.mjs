//Import users
import express from 'express';

//import data from users
import { posts } from '../data/posts.mjs';

//Put  it into a variable to export
let router = express.Router();
router.use(express.json());


//get
router.get('/', (req, res) => {
    res.json(posts);
});

//post
router.post('/', (req, res) => {
    if (req.body.date && req.body.title && req.body.content) {
    const postData = {
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
    };

    posts.push(postData)
    res.send('Content created!');
    
}else {
    res.status(400).send('Missing required fields');
}
});


//put
router.patch('/:date', (req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.date == req.params.date) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });
  
    if (post) res.json(post);
    else next();
  });


//del
router.delete('/:date', (req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.date == req.params.date) {
        users.splice(i, 1);
        return true;
      }
    });
  
    if (post) res.json(post);
    else next();
  });
//export
export default router