const express = require('express');
const axios = require('axios');

const url = process.env.BASE_URL;

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send({ message: 'You did it!' });
});

router.get('/users', (req, res) => {
  res.status(200).send({
    users: [
      {
        id: 'gui123abc',
        name: 'Some Daniel'
      },
      {
        id: 'abc321iug',
        name: 'Tottus McFarlan'
      },
    ]
  })
});

module.exports = router;
