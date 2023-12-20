import { check } from "express-validator";
import validated from "../../middlwares/validated.js";

export const postUserValidated = [
  check("name")
    .notEmpty()
    .withMessage("username is required")
    .isString()
    .withMessage("username must be string"),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .isString()
    .withMessage("password must be string"),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be email"),
  check("role")
    .optional()
    .isIn(["reader", "author", "admin"])
    .withMessage("role must be reader, author or admin"),



  validated,
];


export const getUserValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const updateUserValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];

export const delUserValidateById = [
  check("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("id must be mongoId"),
  validated,
];