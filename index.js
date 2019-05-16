const express = require('express');
const bodyParser = require('body-parser');
const sequalize = require('./helpers/database');

const app = express();

//MODELS
const Person = require('./models/person');

// ROUTES
const personsRoutes =  require('./routes/person');


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: false}))



app.use('/persons',  personsRoutes);



sequalize.sync()
  .then(()=>app.listen(3000))
  .catch(err=>console.log(err));


