const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).send({ message: 'Please include a valid token in order to access this resource.' });
    }

    // Check against production token
    if (token !== process.env.TOKEN) {
      return res.status(403).send({ message: 'You do not have access to access this resource. Please check your token and try again.' });
    }

    // Add token to request headers as user_token
    req.user_token = token;

    next();

  } else {
    // If no token is provided, send error message.
    return res.status(401).send({ message: 'Please include a valid token in order to access this resource.' });
  }
};

module.exports = { authenticateToken }
