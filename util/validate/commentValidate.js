import { check } from "express-validator";
import validated from "../../middlwares/validated.js";

export const postCommentValidated = [
  check("message")
    .notEmpty()
    .withMessage("message is required")
    .isString()
    .withMessage("message must be string"),
  check("postId")
    .notEmpty()
    .withMessage("postId is required")
    .isMongoId()
    .withMessage("postId must be mongoId"),
  check("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isMongoId()
    .withMessage("userId must be mongoId"),
  check("parentId")
    .optional()
    .isMongoId()
    .withMessage("parentId must be mongoId"),
  validated,
];


export const getCommentValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const updateCommentValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const delCommentValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];