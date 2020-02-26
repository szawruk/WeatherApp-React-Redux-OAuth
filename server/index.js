const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const mongoose = require('mongoose');

require('./models/User');
require('./routes')(app);
require('./services/passport');

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session()); //that changes the user value


const PORT = process.env.PORT || 5000;
app.listen(PORT);
