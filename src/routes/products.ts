import { Router } from "express";
import { verifyToken } from "../middlewares/auth";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", verifyToken, createProduct);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;
