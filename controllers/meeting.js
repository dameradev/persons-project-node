const Meeting = require('../models/meeting');
const Person = require('../models/person');
const Location = require('../models/location');

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
  const location = await Location.findByPk(meeting.locationId);
  console.log('LOCATION:', location);
  res.render('meetings/meeting-details', {
    pageTitle: 'Meeting - Details',
    path: '/meetings',
    meeting,
    persons,
    peopleAttending,
    location
  });
}

exports.postAddPerson = async (req, res, next) => { 
  const meeting = await Meeting.findByPk(req.body.meeting);
  const person = await Person.findByPk(req.body.personId);
  
  await meeting.addPerson(person)
  res.redirect(`/meetings/${meeting.id}`)
}

exports.getCreateMeeting = async (req, res, next) => {
  const locations = await Location.findAll({});
  res.render('meetings/create-meeting', {
    pageTitle:'Create a meeting',
    path: '/create-meeting',
    locations
  })
}

exports.postCreateMeeting = (req, res, next) => {
  const start = req.body.start;
  const duration = req.body.duration;
  const description = req.body.description;
  const locationId = req.body.locationId;
  Meeting.create({
    start,
    duration,
    description,
    locationId
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