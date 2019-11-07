const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'vies'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', {title: 'index'}))

app.listen(3000, () => console.log('PS Project running on port 3000!'))