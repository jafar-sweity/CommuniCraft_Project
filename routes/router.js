import express from "express";
const router = express.Router();

import employeeRoutes from "./employeeRoutes.js";
import eventRoutes from "./eventRoutes.js";
import projectRoutes from "./projectRoutes.js";
import skillRoutes from "./skillRoutes.js";
import adminRoutes from "./adminRoutes.js";
import authRouter from "./AuthRouter.js";
import projectManagerRoutes from "./projectManagerRoutes.js";
import CompanyExternalRouter from "./companyExternalApi.js";
import MapsRouter from "./mapsAPI.js";

router.use("/events", eventRoutes);
router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);
router.use("/employee", employeeRoutes);
router.use("/admin", adminRoutes);
router.use("/project-manager", projectManagerRoutes);
router.use("/auth", authRouter);
router.use("/company-data", CompanyExternalRouter);
router.use("/maps", MapsRouter);

export default router;
