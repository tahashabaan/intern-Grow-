import { check } from "express-validator";
import validationResult from "../../middlwares/validated.js";

export const postValidated = [
  check("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be string"),
  check("content")
    .notEmpty()
    .withMessage("content is required")
    .isString()
    .withMessage("content must be string"),
  check("image")
    .notEmpty()
    .withMessage("image is required")
    .isURL()
    .withMessage("image must be url"),
  check("summary").optional().isString().withMessage("summary must be string"),
  check("statusPost")
    .notEmpty()
    .withMessage("statusPost is required")
    .isIn(["pending", "public", "private", "draft"])
    .withMessage("statusPost must be pending, public, private or draft"),
  check("tags").optional(),
  check("categoryId")
    .notEmpty()
    .withMessage("categoryId is required")
    .isMongoId()
    .withMessage("categoryId must be mongoId"),

  check("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isMongoId()
    .withMessage("userId must be mongoId"),

  validationResult,
];

export const getValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validationResult,
];

export const updateValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validationResult,
];

export const delValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validationResult,
];
