const minionsRouter = require('express').Router();
module.exports = minionsRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

  minionsRouter.param('minionId', (req, res, next, id) => {
    const index = Number(id)
    const minion = getFromDatabaseById('minions', index);
    if (minion) {
        req.minion = minion; 
        next();
    } else {
        res.sendStatus(404);
    }
});

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
})

minionsRouter.get('/:minionId', (req, res, next) =>{
    res.send(minion);
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
})

minionsRouter.delete('/minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', minion);
    if(deleted) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})