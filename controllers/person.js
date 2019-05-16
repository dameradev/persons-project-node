const Person = require('../models/person');
const Location = require('../models/location');

exports.getPersons = (req, res, next) => {
  Person.findAll({})
  .then(persons => {
    res.render('persons/persons-list', {
      persons,
      pageTitle: 'List of persons',
      path: '/persons'
    });
  })
  .catch(err=>console.log(err));
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