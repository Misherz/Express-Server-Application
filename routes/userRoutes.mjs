//Import users
import express from 'express';

//import data from users
import { users } from '../data/users.mjs'

//Put  it into a variable to export
let router = express.Router();
router.use(express.json());

//GET
router.get('/', (req, res) => {
    res.json(users);

});

//POST

// Middleware to parse JSON data
router.post('/', (req, res) => {
    if (req.body.name && req.body.username && req.body.id) {
        const userData = {
            name: req.body.name,
            username: req.body.username,
            id: req.body.id + 1,
        };

        users.push(userData)
        res.send('User created!');

    } else {
        res.status(400).send('Missing required fields');
    }
});

//put
router.patch('/:id', (req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });
  
    if (user) res.json(user);
    else next();
  });


//del
router.delete('/:id', (req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });
  
    if (user) res.json(user);
    else next();
  });




//export
export default router
