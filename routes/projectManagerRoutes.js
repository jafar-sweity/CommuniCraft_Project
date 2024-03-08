import express from "express";
const router = express.Router();
import {} from "../controllers/projectManagerController.js";
router.route("/:id/project/:projectID").post();
router
  .route("/:id/project/:projectID/task/:taskID/assign-to/employee/:employeeID")
  .post();
export default router;
