import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get("/", productsCtrl.getProducts);

router.get("/:id", productsCtrl.getProductById);

router.post("/:search", productsCtrl.filterProducts);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
);

router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.updateProductById
);

router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;