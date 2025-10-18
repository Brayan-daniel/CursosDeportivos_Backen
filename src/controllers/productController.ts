import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Error al listar productos", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ message: "name y price son obligatorios" });
    }
    const product = new Product({ name, price, description });
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear producto", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar producto", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.json({ message: "Producto eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar producto", error });
  }
};
