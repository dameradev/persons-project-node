const Meeting = require('../models/meeting');
const Person = require('../models/person');

exports.getMeetings = async (req, res, next) => {
  const meetings = await Meeting.findAll({});
  res.render('meetings/meeting-list', {
    pageTitle: 'List of meetings',
    path:'/meetings',
    meetings
  });
}

exports.getMeeting = async (req, res, next) => { 
  const meeting = await Meeting.findByPk(req.params.id);
  const persons = await Person.findAll({});
  const peopleAttending = await meeting.getPeople();
  
  res.render('meetings/meeting-details', {
    pageTitle: 'Meeting - Details',
    path: '/meetings',
    meeting,
    persons,
    peopleAttending
  });
}

exports.postAddPerson = async (req, res, next) => { 
  const meeting = await Meeting.findByPk(req.body.meeting);
  const person = await Person.findByPk(req.body.personId);
  
  await meeting.addPerson(person)
  res.redirect(`/meetings/${meeting.id}`)
}

exports.getCreateMeeting = (req, res, next) => {
  res.render('meetings/create-meeting', {
    pageTitle:'Create a meeting',
    path: '/create-meeting'
  })
}

exports.postCreateMeeting = (req, res, next) => {
  const start = req.body.start;
  const duration = req.body.duration;
  const description = req.body.description;
  Meeting.create({
    start,
    duration,
    description
  })
  .then(result => {
    console.log('Created a meeting');
    res.redirect('/meetings');
  })
  .catch(err=>console.log(err));
  
}

exports.removePerson = async (req, res, next) => {
  const meeting = await Meeting.findByPk(req.params.meetingId);
  const person = await Person.findByPk(req.params.personId)
  
  await meeting.removePerson(person);
  res.redirect(`/meetings/${meeting.id}`)
}