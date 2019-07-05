const express = require('express');
const projectsController = require('../controllers/projectsController');
const tasksController = require('../controllers/tasksController');

const router = new express.Router();

//Projects

/* get specific or all projects */
router.get('/:_id?',projectsController.find);

/* create new project */
router.post('/', projectsController.store);

/* update a project */
router.put('/:_id', projectsController.update);

/* delete a project */
router.delete('/:_id', projectsController.delete);

//Tasks of projects

/* get specific task or all tasks for project */
router.get('/:projectId/tasks/:_id?',tasksController.find);

/* create new task */
router.post('/:projectId/tasks/', tasksController.store);

/* update a task */
router.put('/:projectId/tasks/:_id', tasksController.update);

/* delete a task or all tasks */
router.delete('/:projectId/tasks/:_id?', tasksController.delete);

module.exports = router;