const express = require('express');
const axios = require('axios');

const { authenticateToken } = require('../helpers');

const url = process.env.BASE_URL;

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
  console.log(req.user_token);
  res.status(200).send({ message: 'You did it!' });
});

router.get('/users', authenticateToken, (req, res, next) => {
  console.log(req.user_token);
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
