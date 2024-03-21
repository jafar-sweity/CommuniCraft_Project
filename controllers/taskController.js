import Task from "../models/Task.js";

const createTask = async (req, res) => {
  try {
    const body = req.body;
    body.user_id = req.params.employeeID;
    body.project_id = req.params.projectID;
    const task = await Task.create(body);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Task.",
    });
  }
};

//Get all Tasks .
const getAllTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving tasks.",
    });
  }
};

//Get Task by id.
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findByPk(id);
    if (tasks) {
      res.status(200).send(tasks);
    } else {
      res.status(404).send({
        message: `Cannot find Task with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving Task with id=" + id,
    });
  }
};

//Get Tasks for specific User.
const getTasksByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: {
        user_id: id,
      },
    });
    if (tasks.length) {
      res.status(200).send(tasks);
    } else {
      res.status(404).send({
        message: `The user with id=${id} has no tasks to do yet.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving Tasks for user with id=" + id,
    });
  }
};

//Get Tasks for specific Project.
const getTasksByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.findAll({
      where: {
        project_id: projectId,
      },
    });
    if (tasks.length) {
      res.status(200).send(tasks);
    } else {
      res.status(404).send({
        message: `The project with id=${projectId} has not been divided into several tasks yet.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Error retrieving Tasks for project with id=" + projectId,
    });
  }
};

//The Project Manager can chang the Employee responsible for specific Task.
const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const num = await Task.update(req.body, {
      where: {
        task_id: id,
      },
    });
    if (num == 1) {
      res.send({
        message: "Task was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error updating Task with id=" + id,
    });
  }
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const num = await Task.destroy({
      where: {
        task_id: id,
      },
    });
    if (num == 1) {
      res.send({
        message: "Task was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Task with id=${req.params.id}. Maybe Task was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Could not delete Task with id=" + req.params.id,
    });
  }
};

export {
  createTask,
  getAllTasks,
  getTaskById,
  getTasksByProjectId,
  getTasksByUserId,
  updateTask,
  deleteTaskById,
};
