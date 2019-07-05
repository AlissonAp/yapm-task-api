const Project = require("../models/Project");
const friendlyResp = require("../common/friendlyResponse");

module.exports = {

  async find(req, res) {
    try {
      const query = req.params._id ? req.params : {};
      const projects = await Project.find(query);

        if (!projects)
            return res
                .status(404)
                .send(friendlyResp.notFoundProject());

        return res.status(200).send({
            projects,
            ...friendlyResp.foundProjects()
        });

    } catch (err) {
        return res.status(500).send(
          friendlyResp.exception(err.message)
        );
    }
  },

  async store(req, res) {
    try {
      const project = await Project.create(req.body);
    
        if (!project)
            return res
                .status(400)
                .send(friendlyResp.notCreatedProject());

        return res.status(201).send({
            project,
            ...friendlyResp.createProject()
        });

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  },

  async update(req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req, body);

      if (!project)
            return res
                .status(404)
                .send(friendlyResp.notFoundProject());

      return res.status(200).send(friendlyResp.updateProject());

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  },

  async delete(req, res) {
    try {
      const project = await Project.findByIdAndDelete(req.params._id);

      if (!project)
        return res
          .status(404)
          .send(friendlyResp.notFoundProject());

      return res.status(200).send(friendlyResp.deleteProject());

    } catch (err) {
        return res.status(500).send(
            friendlyResp.exception(err.message)
        );
    }
  }

};
