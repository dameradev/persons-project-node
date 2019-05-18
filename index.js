const express = require('express');
const bodyParser = require('body-parser');
const sequalize = require('./helpers/database');
const path = require('path');

const app = express();

//MODELS
const Person = require('./models/person');
const Location = require('./models/location');
const Contact = require('./models/contact');
const Meeting = require('./models/meeting');
const PersonMeeting = require('./models/person_meeting');

// ROUTES
const personsRoutes =  require('./routes/person');
const meetingsRoutes = require('./routes/meeting');

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/persons',  personsRoutes);
app.use('/meetings', meetingsRoutes);


Person.belongsTo(Location);
Location.hasMany(Person);

Contact.belongsTo(Person);
Person.hasMany(Contact);

Meeting.belongsTo(Location);
Location.hasMany(Meeting);

Meeting.belongsToMany(Person, { through: PersonMeeting });
Person.belongsToMany(Meeting, { through: PersonMeeting });



sequalize.sync()
  .then(() => { 
    return Location.findOne({where: {street_name: 'Broadway'}});
   })
   .then(location => {
     if (!location) {
       Location.create({
         city: 'New York',
         street_name: 'Broadway',
         street_number: '6',
         zip: '60014',
         country: 'USA',
         name: 'Theater',
         latitude: '49.216080',
         longitude: '16.631370',
       });
     }
     return location;
   })
   .then(() => { 
    return Person.findOne({ where: {nickname: 'mirko'} });
   })
   .then(person => {
     if (!person) {
       Person.create({
         nickname: 'mirko',
         first_name: 'Mirko',
         last_name: 'Nadzakov',
         birth_day: new Date(),
         height: 192,
         locationId: 1
       });
     }
     return person;
   })
  .then(()=>app.listen(3000))
  .catch(err=>console.log(err));


