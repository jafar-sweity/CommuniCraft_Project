import express from "express";
const router = express.Router();
import { getProjectsForProjectManager } from "../controllers/projectManagerController.js";
router.route("/:projectManagerId/projects").get(getProjectsForProjectManager);
router
  .route(
    "/:projectManagerId/project/:projectID/task/:taskID/assign-to/employee/:employeeID"
  )
  .post();
export default router;
