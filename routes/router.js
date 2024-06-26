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
import {authenticate,checkAdminRole,checkprojectManagerRole} from '../middleware/validtion.js';


router.use("/company-data", CompanyExternalRouter);
router.use("/maps", MapsRouter);


router.use("/events", authenticate,eventRoutes);
router.use("/projects", authenticate,projectRoutes);
router.use("/skills", authenticate,skillRoutes);
router.use("/employee", authenticate,employeeRoutes);
router.use("/admin", authenticate,checkAdminRole,adminRoutes);
router.use("/project-manager", authenticate,checkprojectManagerRole,projectManagerRoutes);
router.use("/auth",authRouter);


export default router;
