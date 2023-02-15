const express = require('express');
const apiRouter = express.Router();

const minionRouter = require("./minions")

apiRouter.use('/minions', minionRouter);



module.exports = apiRouter;
