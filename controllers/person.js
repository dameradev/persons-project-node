const Person = require('../models/person');
const Location = require('../models/location');
const Contact = require('../models/contact');

exports.getPersons = async(req, res, next) => {
  const persons = await Person.findAll({});
  const locations = await Location.findAll({});
  

  res.render('persons/persons-list', {
    persons,
    locations,
    pageTitle: 'List of persons',
    path: '/persons'
  });

  
}

exports.getPerson = (req, res, next) => {
  Person
    .findByPk(req.params.id)
    .then(person => {
      res.render('persons/person-details', {
        person,
        pageTitle: 'Details about a person',
        path: '/persons'
      });
    })
    .catch(err=>console.log(err));
}


exports.getCreatePerson = (req, res, next) => {
  return Location.findAll({})
  .then(locations => {
    res.render('persons/create-person', {
      locations,
      pageTitle: 'Create a person',
      path: '/create-person'
    });
  })
  .catch(err=>console.log(err));
}

exports.postCreatePerson = (req, res, next) => {
  const nickname = req.body.nickname;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birth_day = req.body.birth_day;
  const height = req.body.height;
  const locationId = req.body.locationId;
  Person.create({
    nickname,
    first_name,
    last_name,
    birth_day,
    height,
    locationId
  }).then(result => {
    console.log('Created a person!');
    res.redirect('/persons')
  })
  .catch(err=>console.log(err));
}


exports.getCreateContact = async (req, res, next) => {
  const person = await Person.findByPk(req.params.id);

  res.render('persons/create-contact', {
    person,
    pageTitle: 'Create a contact',
    path: '/persons'
  })
}

exports.postCreateContact = async (req, res, next) => {
  const contact = req.body.contact;
  const person = await Person.findByPk(req.params.id);
  person.createContact({
    contact
  })
  .then(result => {
    console.log('Created a contact')
    res.redirect('/persons');
  })
  .catch(err=>console.log(err));
}