import Project from '../models/Project.js';

const createProject = async (req, res) => {
  try {
    const { name, description, cost, discount, status, owner, end_date, project_manager_id } = req.body;
    const project = await Project.create({ name, description, cost, discount, status, owner, end_date, project_manager_id });
    res.status(201).send(project);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Project.'
    });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [
        ['level', 'DESC']  // Sort by 'level' in descending order (beginning .. advance)
      ]
    });
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving projects.'
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.project_id);
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send({
        message: `Cannot find Project with project_id=${req.params.project_id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving Project with project_id=' + req.params.project_id
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const num = await Project.update(req.body, {
      where: { project_id: req.params.project_id }
    });
    if (num == 1) {
      res.send({
        message: 'Project was updated successfully.'
      });
    } else {
      res.send({
        message: `Cannot update Project with project_id=${req.params.project_id}. Maybe Project was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating Project with project_id=' + req.params.project_id
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const num = await Project.destroy({
      where: { project_id: req.params.project_id }
    });
    if (num == 1) {
      res.send({
        message: 'Project was deleted successfully!'
      });
    } else {
      res.send({
        message: `Cannot delete Project with project_id=${req.params.project_id}. Maybe Project was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete Project with project_id=' + req.params.project_id
    });
  }
};

export {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
};
