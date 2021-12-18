import { Router } from "express";
const router = Router();

import * as categoriesCtrl from "../controllers/category.controller";
import { authJwt } from "../middlewares";

router.get("/", categoriesCtrl.getCategories);

router.get("/:id", categoriesCtrl.getCategoryById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  categoriesCtrl.createCategory
);

router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModerator],
  categoriesCtrl.updateCategoryById
);

router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.deleteCategoryById
);

export default router;