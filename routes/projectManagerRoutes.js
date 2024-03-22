import express from "express";
const router = express.Router();
import {
  getProjectsForProjectManager,
  assignTaskforEmployee,
  getTasksforProject,
  updateTaskFromProjectManager,
  deleteTaskFromProjectManager,
} from "../controllers/projectManagerController.js";

router.route("/:projectManagerId/projects").get(getProjectsForProjectManager);

router
  .route(
    "/:projectManagerId/project/:projectID/assign-task-to/employee/:employeeID"
  )
  .post(assignTaskforEmployee);

router
  .route("/:projectManagerId/project/:projectID/tasks")
  .get(getTasksforProject);

router
  .route("/:projectManagerId/task/:taskId")
  .put(updateTaskFromProjectManager)
  .delete(deleteTaskFromProjectManager);

export default router;
