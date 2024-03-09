import express from "express";
const router = express.Router();

import employeeRoutes from "./employeeRoutes.js";
import eventRoutes from "./eventRoutes.js";
import projectRoutes from "./projectRoutes.js";
import skillRoutes from "./skillRoutes.js";
import adminRoutes from "./adminRoutes.js";
import projectManagerRoutes from "./projectManagerRoutes.js";

router.use("/events", eventRoutes);
router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);
router.use("/employee/:id", employeeRoutes);
router.use("/admin/:id", adminRoutes);
router.use("/project-manager/:id", projectManagerRoutes);

export default router;
