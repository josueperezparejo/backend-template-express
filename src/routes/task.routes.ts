import { Router } from "express";
import { body } from "express-validator";

import { validate } from "../middlewares";
import { taskController } from "../controllers";

const router = Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required").isString(),
    body("description")
      .notEmpty()
      .withMessage("description is required")
      .isString(),
    body("completed").optional().isBoolean(),
    validate,
  ],
  taskController.createTask
);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export { router as taskRoutes };
