const express = require('express');
const axios = require('axios');

const url = process.env.BASE_URL;

const route = express.Router();

router.post('/create', async (req, res) => {
  const {
    firstName, middleName, lastName, streetAddress, city, state, zipCode, phoneNumber, dateOfBirth, email
  } = req.body;

  const body = {
    firstName, middleName, lastName, streetAddress, city, state, zipCode, phoneNumber, dateOfBirth, email
  };

  const response = await axios.post(
    `${url}/databroker/profile/`, body, {
      'Authorization': `Bearer `
    })
});
