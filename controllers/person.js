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