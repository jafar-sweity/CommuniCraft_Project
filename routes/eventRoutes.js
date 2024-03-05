import express from "express";
const router = express.Router();
import {} from "../controllers/eventController.js";
router.route("/").get();
router.route("/:id").post().put().delete();

export default router;
