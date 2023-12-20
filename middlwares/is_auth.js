import jwt from "jsonwebtoken";

import ApiError from "./../util/apiError.js";

export default async (req, res, next) => {
  const auth = req.get("Authorization");
  try {
    if (!auth) next(new ApiError(401,  "you should logged in ..." ));
    const token = auth.split(" ")[1];

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) next(new ApiError("Invalid Token"));
    req.userId = decodedToken.userId;
    req.user = decodedToken.user;
  } catch (e) {
    next(new ApiError(401, "something went wrong ..." + e));
  }
  next();
};
