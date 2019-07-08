const Project = require("../models/Project");
const friendlyResp = require("../common/friendlyResponse");
const Task = require("../models/Task");

module.exports = {

  async find(req, res) {
    try {
        const {projectId, _id} = req.params;
        
        const tasks = await Project.find({
            _id : projectId,
            'tasks._id' : _id
        });

        sortedTasks = tasks.sort(function(a,b){
            var c = new Date(a.dueDate);
            var d = new Date(b.dueDate);
            return c-d;
        });

        console.log(sortedTasks);

  

        if (!sortedTasks.length)
            return res
                .status(404)
                .send(friendlyResp.notFoundTask());

        return res.status(200).send({
            sortedTasks,
            ...friendlyResp.foundTask()
        });

    } catch (err) {
        return res.status(500).send(
          friendlyResp.exception(err.message)
        );
    }
  },

  async store(req, res) {
    try {
        const { projectId } = req.params;

        const projectTask = await Project.findByIdAndUpdate(projectId,
            { $push : {  
                tasks : new Task(req.body) 
            }}
        );

        if (!projectTask)
            return res
                .status(400)
                .send(friendlyResp.notCreatedTask());

        return res.status(201).send({
            projectTask,
            ...friendlyResp.createTask()
        });

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  },

  async update(req, res) {
    try {
        const {projectId, _id} = req.params;

        const projectTask = await Project.findOneAndUpdate(
            { _id : projectId, 'tasks._id' : _id },
            { $set : { 'tasks.$' : new Task({_id, ...req.body})}},
        );

        if (!projectTask)
                return res
                    .status(404)
                    .send(friendlyResp.notFoundTask());

        return res.status(200).send(friendlyResp.updateTask());

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  },

  async delete(req, res) {
    try {
        const {projectId, _id} = req.params;

        const project = await Project.findById(projectId);

        if(!project)
            return res
            .status(404)
            .send(friendlyResp.notFoundProject());

        project.tasks.pull({ _id : _id});
        const projectTask = await project.save()

        if (!projectTask)
            return res
            .status(404)
            .send(friendlyResp.notFoundTask());

        return res.status(200).send(friendlyResp.deleteTask());

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  }

};
