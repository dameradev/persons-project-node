const Person = require('../models/person');


exports.getPersons = (req, res, next) => {
  res.render('persons/persons-list', {
    pageTitle: 'List of persons',
    path: '/persons'
  });
}


exports.getCreatePerson = (req, res, next) => {
  res.render('persons/create-person', {
    pageTitle: 'Create a person',
    path: '/create-person'
  });
}

exports.postCreatePerson = (req, res, next) => {
  const nickname = req.body.nickname;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birth_day = req.body.birth_day;
  const height = req.body.height;
  Person.create({
    nickname,
    first_name,
    last_name,
    birth_day,
    height
  }).then(result => {
    console.log('Created a person!');
    res.redirect('/persons')
  })
  .catch(err=>console.log(err));
}