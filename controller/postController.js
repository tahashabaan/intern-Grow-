import sql from "mssql";
import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

import upload from "../util/uploadFile.js";
import ApiError from "../util/apiError.js";
import isAuth from "../middlwares/is_auth.js";
import { uploadImage } from "../util/cloudinary.js";

const router = Router();

router.get("/post", async (req, res, next) => {
  sql.query(
    "select * from Post ",
    (err, result) => {
      if (err) next(new ApiError(400, "cannot get post"));
      res.status(200).json({ message: "post sucessfuly", result });
    }
  );
});

router.post(
  "/post",
  isAuth,
  upload.single("image"),
  uploadImage,
  async (req, res, next) => {
    const { title, content } = req.body;

    const id = uuidv4();
    sql.query(
      `insert into Post( title, content) values ('${title}', '${content}')`,
      (err, result) => {
        if (err) {
          console.log(err);
          next(new ApiError(400, "cannot create post"));
        }
        res.status(201).json({ message: "post sucessfuly", result });
      }
    );
  }
);

router
  .route("/post/:id")
  .get(async (req, res, next) => {
    const { id } = req.params;
    sql.query(`select * from Post where id = ${id}`, (err, result) => {
      if (err) next(new ApiError(400, "cannot get post"));
      res.status(200).json({ message: "post sucessfuly", result });
    });
  })
  .put(isAuth, async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    sql.query(
      `update Post set title = '${title}', content = '${content}' where id = ${id}`,
      (err, result) => {
        if (err) next(new ApiError(400, "cannot update post"));
        res.status(200).json({ message: "post sucessfuly update" });
      }
    );
  })
  .delete(isAuth, async (req, res, next) => {
    const { id } = req.params;
    sql.query(`delete from Post where id = ${id}`, (err, result) => {
      if (err) next(new ApiError(400, "cannot delete post"));
      res.status(200).json({ message: "delete post done " });
    });
  });

export default router;
