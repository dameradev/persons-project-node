exports.getPersons = (req, res, next) => {
  res.render('persons', {
    pageTitle: 'List of persons',
    path: '/persons'
  });
}


exports.getCreatePerson = (req, res, next) => {
  res.render('create-person', {
    pageTitle: 'Create a person',
    path: '/create-person'
  });
}