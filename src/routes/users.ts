import { Router } from "express";
import { getUsers, deleteUser } from "../controllers/userController";
import { verifyToken } from "../middlewares/auth";

const router = Router();

router.get("/", verifyToken, getUsers);        // Listar usuarios (protegido)
router.delete("/:id", verifyToken, deleteUser); // Eliminar usuario por ID (protegido)

export default router;
