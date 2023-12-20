import { check } from "express-validator";
import validated from "../../middlwares/validated.js";

export const postCategoryValidated = [
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

export const getCategoryValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const updateCategoryValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const delCategoryValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];
// Compare this snippet from util/validate/userValidate.js: