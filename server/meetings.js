const meetingsRouter = require('express').Router();
module.exports = meetingsRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
    createMeeting
  } = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(201).send();
})