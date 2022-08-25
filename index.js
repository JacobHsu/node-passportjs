const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.use(
  cookieSession({ name: 'session', keys: ['lama'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

app.listen('5000', () => {
  console.log('port:5000 Server is running!');
});
