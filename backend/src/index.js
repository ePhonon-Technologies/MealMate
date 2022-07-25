const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mealmate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.get('/', (req, res) => res.send('MealMate API Running'));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
