const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountsData = fs.readFileSync(path.join(__dirname, 'json'), 'utf8')

const accounts = JSON.parse(accountsData);

const userData = fs.readFileSync(path.join(__dirname, 'json', 'uses.json'), 'utf8');

const users = JSON.parse(userData);
app.get('/', (req, res) => res.render('index', {title: 'account sammary', accounts}));
app.get('/saving', (req, res)=>{
    res.render('account',{account:accounts.savings})
});

app.get('/cheking', (req, res)=>{
    res.render('account',{account:accounts.cheking})
});

app.get('/credits', (req, res)=>{
    res.render('account',{account:accounts.credits})
})

app.get('/profile', (req, res)=>{
    res.render('profile',{users:users[0]})
})

app.listen(3000);