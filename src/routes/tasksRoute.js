const express = require('express');
const tasksController = require('../controllers/tasksController');

const router = new express.Router();

/* get specific or all tasks */
router.get('/:projectId/:_id?',tasksController.find);

/* create new task */
router.post('/:projectId')

/* update a task */
router.put('/:projectId/:_id')

/* delete a task */
router.delete('/:projectId/:_id')

module.exports = router;