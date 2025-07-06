const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
const authRoute = require('./routes/auth');

mongoose.connect('mongodb://mongo:27017/flipkart', { useNewUrlParser: true });

const app = express();
app.use(express.json());
app.use('/api/products', productsRoute);
app.use('/api/auth', authRoute);

app.listen(5000, () => console.log('API running on port 5000'));
