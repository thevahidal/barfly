
import { Router } from "express";

import { tables as tablesController } from "../controllers";

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Get all tables
 *     responses:
 *       2010:
 *         description: Returns all tables
 */
router.get("/", tablesController.getTables);

/**
 * @openapi
 * /:
 *   post:
 *     description: Create a new table
 *     responses:
 *       201:
 *         description: Returns the newly created table
 */
router.post("/", tablesController.modifyTable);

export default router;