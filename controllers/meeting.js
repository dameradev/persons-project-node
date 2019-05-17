const Meeting = require('../models/meeting');

exports.getMeetings = async (req, res, next) => {
  const meetings = await Meeting.findAll({});
  res.render('meetings/meeting-list', {
    pageTitle: 'List of meetings',
    path:'/meetings',
    meetings
  });
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