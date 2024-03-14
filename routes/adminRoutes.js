import express from "express";
const router = express.Router();
import {} from "../controllers/adminController.js";

router.route("/events").post();
router.route("/event/:eventID").put().delete();

router.route("/users").get().post();
router.route("/user/:userID").put().delete();

router.route("/projects").post();
router.route("/project/:projectID").put().delete();

router.route("/companies").get().post();
router.route("/company/:companyID").put().delete();

router.route("/tools").get().post();
router.route("/tool/:toolID").put().delete();
export default router;
