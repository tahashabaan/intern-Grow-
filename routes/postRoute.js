import path from "path";

import { Router } from "express";
// import multer from "multer";
// const upload = multer({ storage: multer.memoryStorage() });
import upload from "../util/uploadFile.js";

import {
  uploadPostImage,
  createService,
  getService,
  getServiceById,
  updateServiceById,
  removeService,
} from "../services/postService.js";

import {
  postValidated,
  getValidateById as postValidatedById,
} from "../util/validate/postValidate.js";

import isAuth from "../middlwares/is_auth.js";

const router = Router();

router
  .route("/posts")
  .post(
    isAuth,
    postValidated,
    upload.single("image"),
    uploadPostImage,
    createService
  )
  .get(getService);

router
  .route("/posts/:postId")
  .get(postValidatedById, getServiceById)
  .put(
    isAuth,
    postValidatedById,
    upload.single("image"),
    uploadPostImage,
    updateServiceById
  )
  .delete(isAuth, postValidatedById, removeService);

router.get("/download", (req, res, next) => {});

router.get("/download/:filePath", (req, res, next) => {
  const { filePath } = req.params;
  const filePathDown = path.join(__dirname, "../uploads/images", filePath);
  console.log(filePathDown);
  res.download(filePathDown);
});

export default router;
