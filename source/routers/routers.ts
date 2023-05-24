import controllers from "../controllers/controllers";
import express from "express";

const router = express.Router();

router.get("/user", controllers.getUsers);

export default router;
