const express = require('express');
const axios = require('axios');

const url = process.env.BASE_URL;

const router = express.Router();

router.post('/get-token', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Missing user/pass' });
  }

  const userInfo = await axios.post(`${url}/auth/account/login`, { email, password }).then(({ data }) => {
    data.status = 201;
    delete data.scope;
    delete data.migrationStatus;
    delete data.multiFactorAuthenticationRequired;
    return data;
  }).catch(err => {
    const resp = {
      status: 400,
      message: 'Username or password is incorrect.'
    }
    return resp;
  })

  return res.status(userInfo.status).send(userInfo);
});

router.post('/refresh-token', async (req, res) => {
  const { refreshToken, accessToken } = req.body;

  if (!refreshToken || !accessToken) {
    return res.status(400).send({ message: 'Missing refresh token and/or access token header.' });
  }

  const body = { refreshToken };

  const resp = await axios.post(`${url}/auth/Account/RefreshToken`, body, { 'Authorization': `Bearer ${ accessToken }` })
    .then(({ data }) => {
      delete data.scope;
      data.status = 201;
      return data;
    }).catch(err => {
      console.log(err.response.data);
      const data = { status: 401, message: 'Could not refresh token.' };
      return data;
    });

  return res.status(resp.status).send(resp);
});

module.exports = router;
