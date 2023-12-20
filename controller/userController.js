import sql from "mssql";
import { Router } from "express";

import ApiError from "../util/apiError.js";
import isAuth from "../middlwares/is_auth.js";
import upload from "../util/uploadFile.js";
import { uploadImage } from "../util/cloudinary.js";

const router = Router();

router.use(isAuth);
router
  .route("/me")
  .get(async (req, res, next) => {
    try {
      const user = await sql.query(
        `select * from [User] where id = ${req.user.id}`
      );
      res.status(200).json({ message: "user sucessfuly", user });
    } catch (err) {
      next(new ApiError(400, "cannot get user" + err));
    }
  })

  .put(async (req, res, next) => {
    try {
      const { email, name, profilePicutre, phone } = req.body;
      const user = await sql.query(
        `update [User] set email = '${email}', name = '${name}', profilePicutre='${profilePicutre}', phone='${phone}' where id = ${req.user.id}`
      );
      res.status(200).json({ message: "user sucessfuly update" });
    } catch (err) {
      next(new ApiError(400, "cannot update user"));
    }
  })
  .delete(async (req, res, next) => {
    try {
      const user = await sql.query(
        `delete from [User] where id = ${req.user.id}`
      );
      res.status(200).json({ message: "user sucessfuly delete" });
    } catch (err) {
      next(new ApiError(400, "cannot delete user"));
    }
  });

router.put(
  "/me/change-profilePicture",
  upload.single("profilePicutre"),
  uploadImage,
  async (req, res, next) => {
    try {
      const { secure_url } = req.image;
      const user = await sql.query(
        `update [User] set profilePicutre = '${secure_url}' where id = ${req.user.id}`
      );
      res.status(200).json({ message: "user sucessfuly update" });
    } catch (err) {
      next(new ApiError(400, "cannot upload image"));
    }
  }
);

export default router;
