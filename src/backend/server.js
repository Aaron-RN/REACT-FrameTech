const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Database connection established successfully');
});

const charactersRouter = require('./routes/characters');
app.use('/characters', charactersRouter);

const basicAttacksRouter = require('./routes/basicAttacks');
app.use('/basicAttacks', basicAttacksRouter);

const comboStringsRouter = require('./routes/combos');
app.use('/comboStrings', comboStringsRouter);

const specialMovesRouter = require('./routes/specials');
app.use('/specialMoves', specialMovesRouter);

const allMovesRouter = require('./routes/allMoves');
app.use('/allMoves', allMovesRouter);


app.listen(port, () => {
  console.log('Server is running on port: ', port);
});

