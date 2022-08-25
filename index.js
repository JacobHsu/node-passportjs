const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();

const product = require("./api/product");

app.use(express.json({ extended: false }));
app.use("/api/product", product);

// const path = require('path');

// app.use(express.static('public'));
// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, 'public') });
// });

app.get('/', (req, res) => res.send('Home Page Route'));

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} Server is running!`);
});
