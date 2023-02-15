const ideasRouter = require('express').Router();
module.exports = ideasRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

ideasRouter.param('ideaId', (req, res, next, id) => {
    const index = Number(id)
    const idea = getFromDatabaseById('ideas', index);
    if (idea) {
        req.idea = idea; 
        next();
    } else {
        res.sendStatus(404);
    }
});

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'))
})

ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})

ideasRouter.put('/:ideaId', (req, res, next) =>{
const updatedIdea = updateInstanceInDatabase('ideas', req.body);
res.send(updatedIdea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    deletedIdea = deleteFromDatabasebyId('ideas', req.idea);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});
