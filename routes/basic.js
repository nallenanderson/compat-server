const express = require('express');
const axios = require('axios');

const url = process.env.BASE_URL;

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send({ message: 'You did it!' });
}

module.exports = router;
