require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

// Import Routes
const basic = require('./routes/basic');
const auth = require('./routes/auth');

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

// Apply routing
app.use('/', basic);
app.use('/auth', auth);

app.listen(port, () => console.log(`Server running on port ${port}`));
