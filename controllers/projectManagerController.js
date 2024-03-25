import Project from "../models/Project.js";
import Task from "../models/Task.js";
import {
  createTask,
  getTasksByProjectId,
  updateTask,
} from "./taskController.js";
import logger from "../logger.js";

const getProjectsForProjectManager = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: { project_manager_id: req.params.projectManagerId },
    });
    res.status(200).send(projects);
    logger.info(`Get Projects for project manager with id=${req.params.projectManagerId}. success`)
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving projects.",
    });
    logger.error(error.message || "Some error occurred while retrieving projects.")
  }
};

const assignTaskforEmployee = (req, res) => {
  createTask(req, res);
};

const getTasksforProject = (req, res) => {
  getTasksByProjectId(req, res);
};
const updateTaskFromProjectManager = async (req, res) => {
  //must add a project manager Id for each task to know which one can update on it so i didn't use the function by farah
  //controller must use the original class if no thing to add like the function above
  try {
    const num = await Task.update(req.body, {
      where: {
        task_id: req.params.taskId,
        project_manager_id: req.params.projectManagerId,
      },
    });
    if (num) {
      res.send({
        message: "Task was updated successfully.",
      });
      logger.info(`Task with id=${req.params.taskId} was updated successfully.`)
    } else {
      res.send({
        message: `Cannot update task with id=${req.params.taskId}.`,
      });
      logger.info(`Cannot update task with id=${req.params.taskId}.`)
    }
  } catch (error) {
    res.status(500).send({
      message: "Error updating task with id=" + req.params.taskId,
    });
    logger.error("Error updating task with id=" + req.params.taskId)
  }
};
const deleteTaskFromProjectManager = async (req, res) => {
  try {
    const num = await Task.destroy({
      where: {
        task_id: req.params.taskId,
        project_manager_id: req.params.projectManagerId,
      },
    });
    if (num) {
      res.send({
        message: "Task was deleted successfully!",
      });
      logger.info(`Task with id=${req.params.taskId} was deleted successfully!`)
    } else {
      res.send({
        message: `Cannot delete Task with id=${req.params.taskId}. Maybe Task was not found!`,
      });
      logger.info(`Cannot delete Task with id=${req.params.taskId}. Maybe Task was not found!`)
    }
  } catch (error) {
    res.status(500).send({
      message: "Could not delete Task with id=" + req.params.taskId,
    });
    logger.error("Could not delete Task with id=" + req.params.taskId)
  }
};
export {
  deleteTaskFromProjectManager,
  updateTaskFromProjectManager,
  getProjectsForProjectManager,
  assignTaskforEmployee,
  getTasksforProject,
};
