import express from "express";
const router = express.Router();
import * as employeeController from "../controllers/employeeController.js";
import {authenticate} from '../middleware/validtion.js';

// Profile
router.route("/:id/profile").get(authenticate, employeeController.getMyProfile).put(authenticate, employeeController.updateMyProfile);

// Project
router.route("/projects").get(authenticate, employeeController.showAllProjects);
router.route("/project/:project_id").get(authenticate, employeeController.showProject);
router.route("/:userId/myProjects").get(authenticate, employeeController.showMyProject) ////

// Task
router.route("/:userId/myTasks").get(authenticate, employeeController.showMyTasks) ////
router.route("/task/:taskId").get(authenticate, employeeController.showTask)    ////

// Skill
router.route("/skills").get(authenticate, employeeController.showAllSkills).post(authenticate, employeeController.addNewSkill) 
router.route("/:id/mySkills").get(authenticate, employeeController.getMySkills) 
router.route("/mySkill").post(authenticate, employeeController.addAvailabilSkill) 
router.route("/skill/:id").delete(authenticate, employeeController.deleteSkill)

// Tool
router.route("/tools").get(authenticate, employeeController.getTools).post(authenticate, employeeController.addNewTool)
router.route("/sharingTools").get(authenticate, employeeController.getSharingTools);
router.route("/:id/myTools").get(authenticate, employeeController.getMyTools)
router.route("/myTool").post(authenticate, employeeController.addTool)
router.route("/tool/:id").delete(authenticate, employeeController.deleteTool).put(authenticate, employeeController.updateTool)

// Event
router.route("/events").get(authenticate, employeeController.getAllEvent)
router.route("/event/:id").get(authenticate, employeeController.ShowEvent)
router.route("/:id/myEvents").get(authenticate, employeeController.showMyEvents) 
router.route("/register/event").post(authenticate, employeeController.registerInEvent)
router.route("/register/event/:id").delete(authenticate, employeeController.deleteRegister)

export default router;
