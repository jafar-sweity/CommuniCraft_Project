import express from "express";
const router = express.Router();
import * as employeeController from "../controllers/employeeController.js";

// Profile
router.route("/:id/profile").get( employeeController.getMyProfile).put(employeeController.updateMyProfile);

// Project
router.route("/projects").get( employeeController.showAllProjects);
router.route("/project/:project_id").get(employeeController.showProject);
router.route("/:userId/myProjects").get(employeeController.showMyProject) ////

// Task
router.route("/:userId/myTasks").get( employeeController.showMyTasks) ////
router.route("/task/:taskId").get(employeeController.showTask)    ////

// Skill
router.route("/skills").get(employeeController.showAllSkills).post( employeeController.addNewSkill) 
router.route("/:id/mySkills").get( employeeController.getMySkills) 
router.route("/mySkill").post( employeeController.addAvailabilSkill) 
router.route("/skill/:id").delete( employeeController.deleteSkill)

// Tool
router.route("/tools").get( employeeController.getTools).post(employeeController.addNewTool)
router.route("/sharingTools").get( employeeController.getSharingTools);
router.route("/:id/myTools").get(employeeController.getMyTools)
router.route("/myTool").post(employeeController.addTool)
router.route("/tool/:id").delete( employeeController.deleteTool).put(employeeController.updateTool)

// Event
router.route("/events").get(employeeController.getAllEvent)
router.route("/event/:id").get(employeeController.ShowEvent)
router.route("/:id/myEvents").get( employeeController.showMyEvents) 
router.route("/register/event").post(employeeController.registerInEvent)
router.route("/register/event/:id").delete(employeeController.deleteRegister)

export default router;
