import express from "express";
const router = express.Router();
import {} from "../controllers/projectController.js";
router.route("/").get();
router.route("/:id");

export default router;
