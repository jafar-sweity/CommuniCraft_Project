import express from "express";
const router = express.Router();
import {  } from "../controllers/adminController.js";

router.route("/:id/add-event").post();
router.route("/:id/add-employee").post();
router.route("/:id/add-project").post();
export default router;
