import Task from '../models/Task.js'
import Project from '../models/Project.js';
import logger from "../logger.js";

const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).send(task);
      logger.info(`Create Task successfully`)

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Task.'
      })
      logger.error(error.message || 'Some error occurred while creating the Task.')
    }
};

 //Get all Tasks .
const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.status(200).send(tasks);
      logger.info(`Get All Tasks successfully`)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving tasks.'
      });
      logger.error(error.message || 'Some error occurred while retrieving tasks.')
    }
  };

  //Get Task by id.
  const  getTaskById = async (req, res) => {
    try {
      const {taskId} = req.params;
      const tasks = await Task.findByPk(taskId)
      if (tasks) {
        res.status(200).send(tasks);
        logger.info(`Get Task with id ${taskId} successfully`)
      } else {
        res.status(404).send({
          message: `Cannot find Task with id=${taskId}.`
        });
        logger.info(`Cannot find Task with id=${taskId}.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Task with id=' + req.params.taskId
      });
      logger.error(error.message || 'Error retrieving Task with id=' + req.params.taskId)
    }
  };


  //Get Tasks for specific User.
  const  getTasksByUserId = async (req, res) => {
    try {
      const{userId} = req.params;
      const tasks = await Task.findAll({
        where: {
            UserId: userId
        }
      })
      if (tasks.length) {
        res.status(200).send(tasks);
      } else {
        res.status(404).send({
          message: `The user with id=${userId} has no tasks to do yet.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Tasks for user with id=' + userId
      });
    }
  };

  // Get my projects
   const getMyProjects = async (req, res) =>{
    try {
      const{userId} = req.params;
      const projectsIds = await Task.findAll({
        attributes: ["ProjectProjectId"],
          where: { UserId: userId}
      });
     const projectsNames = await Promise.all(projectsIds.map(async (task) =>{
      const projectId = task.ProjectProjectId;
      //get project name for each id..
      const projectName = await Project.findByPk( projectId, {
        attributes: ["name"]
      }); 
      return  projectName.name;
     }))

      if (projectsNames.length) {
        res.status(200).send({projectsNames: projectsNames});
        logger.info(`Get Projects for user with id ${userId} successfully`)
      } else {
        res.status(404).send({
          message: `The user with id=${userId} has no projects .`
        });
        logger.info(`The user with id=${userId} has no projects .`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving projects for user with id=' + userId
      });
      logger.error(error.message || 'Error retrieving projects for user with id=' + userId)
    }
   }

   //Get Tasks for specific Project.
   const  getTasksByProjectId = async (req, res) => {
    try {
      const{ projectId } = req.params;
      const tasks = await Task.findAll({
        where: {
            projectId: projectId
        }
      })
      if (tasks.length) {
        res.status(200).send(tasks);
        logger.info(`Get Tasks for Project with id ${projectId} successfully`)
      } else {
        res.status(404).send({
          message: `The project with id=${projectId} has not been divided into several tasks yet.`
        });
        logger.info(`The project with id=${projectId} has not been divided into several tasks yet.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || `Error retrieving Tasks for project with id=`+ req.params.projectId
      });
      logger.error(error.message || `Error retrieving Tasks for project with id=`+ req.params.projectId)
    }
  };

  //The Project Manager can chang the Employee responsible for specific Task. 
  const updateTask = async (req, res) => {
    const{taskId} = req.params;
    try { 
      const num = await Task.update(req.body, {
        where: { 
            task_id: taskId 
        }
      });
      if (num == 1) {
        res.send({
          message: 'Task was updated successfully.'
        });
        logger.info(`Task with id ${taskId} was updated successfully.`)
      } else {
        res.send({
          message: `Cannot update Task with id=${taskId}. Maybe Task was not found or req.body is empty!`
        });
        logger.info(`Cannot update Task with id=${taskId}. Maybe Task was not found or req.body is empty!`)
      }
    } catch (error) {
      res.status(500).send({
        message: 'Error updating Task with id=' + taskId
      });
      logger.error('Error updating Task with id=' + taskId)
    }
  };

  const deleteTaskById = async (req, res) => {
      const{taskId} = req.params;
    try {
      const num = await Task.destroy({
        where: { 
            task_id: taskId 
        }
      });
      if (num == 1) {
        res.send({
          message: 'Task was deleted successfully!'
        });
        logger.info(`Task with id ${req.params.taskId} was deleted successfully!`)
      } else {
        res.send({
          message: `Cannot delete Task with id=${req.params.taskId}. Maybe Task was not found!`
        });
        logger.info(`Cannot delete Task with id=${req.params.taskId}. Maybe Task was not found!`)
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Task with id=' + req.params.taskId
      });
      logger.error('Could not delete Task with id=' + req.params.taskId)
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
    getMyProjects
};