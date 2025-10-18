import { Router } from "express";
import { getUsers } from "../controllers/userController";
import { verifyToken } from "../middlewares/auth";

const router = Router();

router.get("/", verifyToken, getUsers);

export default router;
