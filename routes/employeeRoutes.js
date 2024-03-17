import express from "express";
const router = express.Router();
import { profile } from "../controllers/employeeController.js";

router.route("/").get(profile);
router.route("/tasks").get();
router.route("/task/:taskID").put();

router.route("/tools").get().post();
// this toolsID is the id in the tools table not in the user-tools table
// the user see the tools in the table then select an id from them and insert
//it in the user-tools table
// but if the tool he needed is not in the tools table he can
//add it there before using the previous request
router.route("/tool/:toolID").put().delete();

//same as tools
router.route("/skills").post().get();
router.route("/skill/:skillID").post().delete();

router.route("/event/:eventID").post();
export default router;
