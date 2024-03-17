import express from 'express';
import {createTask, 
    getAllTasks, 
    getTasksById,
    getTasksByProjectId, 
    getTasksByUserId,
    updateTask,
    deleteTaskById} from '../controllers/taskController.js';

const testRouter = express.Router();

testRouter.route('/test').get(getAllTasks).post(createTask);
testRouter.route('/test/:id').get(getTasksById).put(updateTask).delete(deleteTaskById);
testRouter.route('/test/project/:id').get(getTasksByProjectId)
testRouter.route('/test/user/:id').get(getTasksByUserId);

export default testRouter;