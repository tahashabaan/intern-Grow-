import { check } from "express-validator";
import validated from "../../middlwares/validated.js";

export const postTagValidated = [
  check("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be string"),
  check("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be string"),
  check("image").optional().isURL().withMessage("image must be url"),
  check("postId")
    .notEmpty()
    .withMessage("postId is required")
    .isMongoId()
    .withMessage("postId must be mongoId"),
  validated,
];
