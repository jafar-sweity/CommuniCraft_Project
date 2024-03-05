import express from "express";
const router = express.Router();
import {} from "../controllers/projectManagerController.js";
router.route("/:id/project/:project-id/create-task").post();
router
  .route("/:id/project/:project-id/task/:task-id/assign/:employee-id")
  .post();
export default router;
