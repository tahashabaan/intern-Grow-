import { check } from "express-validator";
import validated from "../../middlwares/validated.js";

export const postBlogValidated = [
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
  validated,
];

export const getBlogValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const updateBlogValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const delBlogValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];
