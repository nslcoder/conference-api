require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const talkRoutes = require('./talks/talksRoutes');

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/talks', talkRoutes);

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
