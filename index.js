require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const talksRoutes = require('./talks/talksRoutes');
const attendeesRoutes = require('./attendees/attendeesRoutes');

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/talks', talksRoutes);
app.use('/api/attendees', attendeesRoutes);

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
