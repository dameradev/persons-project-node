const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const personsRoutes =  require('./routes/persons');


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}))



app.use('/persons',  personsRoutes);



app.listen(3000); 
