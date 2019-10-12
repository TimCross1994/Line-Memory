const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database')

const app = express();

const corsOptions = {
  origin: 3000,
  credentials: true,
  optionsSuccessStatus: 200
}

require('dotenv').config();
require('./config/database');

const userRoute = require('./routes/api/user')
const noteRoute = require('./routes/api/NoteContainer');


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



app.use(require('./config/auth'));

app.get('/hello', (req,res) => {
  res.send('hello')
})

// Put API routes here, before the "catch all" route
app.use('/api/users', userRoute);
app.use('/api/NoteContainer', noteRoute);


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});