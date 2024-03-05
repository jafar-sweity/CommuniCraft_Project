import express from "express";
const router = express.Router();
import { welcom } from "../controllers/employeeController.js";
router.route("/");
router.route("/:id").get(welcom);

router.route("/:id/view-tasks").get();
router.route("/:id/update-task/:task-id").get();

export default router;
