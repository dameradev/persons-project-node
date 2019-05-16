const express = require('express');
const bodyParser = require('body-parser');
const sequalize = require('./helpers/database');

const app = express();

//MODELS
const Person = require('./models/person');
const Location = require('./models/location');
const Contact = require('./models/contact');

// ROUTES
const personsRoutes =  require('./routes/person');


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: false}))



app.use('/persons',  personsRoutes);


Person.belongsTo(Location);
Location.hasMany(Person);

Contact.belongsTo(Person);
Person.hasMany(Contact);


sequalize.sync()
  .then(() => { 
    return Location.findByPk(1);
   })
   .then(location => {
     if (!location) {
       Location.create({
         city: 'Brno',
         street_name: 'Kohutova',
         street_number: '3',
         zip: '60014',
         country: 'Czezh Republic',
         name: 'Dormitory',
         latitude: '49.216080',
         longitude: '16.631370',
       });
     }
     return location;
   })
   .then(() => { 
    return Person.findByPk(1);
   })
   .then(person => {
     if (!person) {
       Person.create({
         nickname: 'dame',
         first_name: 'Damjan',
         last_name: 'Radev',
         birth_day: new Date(),
         height: 192,
         locationId: 1
       });
     }
     return person;
   })
  .then(()=>app.listen(3000))
  .catch(err=>console.log(err));


