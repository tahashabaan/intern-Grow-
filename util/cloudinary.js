import { v2 as cloudinary } from "cloudinary";

import ApiError from "./apiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUD,
  api_secret: process.env.API_SECRET_KEY_CLOUD,
});

export const uploadImage = async (req, res, next) => {
 if (!req.file) return next();
  const { file } = req;
  try {
    const fileName = new Date().getTime() + "-" + file.originalname;
    const result = await cloudinary.uploader.upload(fileName);
    req.imageId = result.public_id;
    req.image = result.secure_url;
    next();
  } catch (err) {
    next(new ApiError(500, err.message));
  }
};
