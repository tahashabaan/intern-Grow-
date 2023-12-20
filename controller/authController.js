import sql from "mssql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Router } from "express";

import ApiError from "../util/apiError.js";

const router = Router();

router.post("/signUp", async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!email.includes("@") || password.length < 6) {
    return res.status(400).json({ message: "email or password is not valid" });
  }

  const result = await sql.query(
    `select * from [User] where email = '${email}'`
  );

  if (result.recordset.length > 0) {
    return res.status(400).json({ message: "email already exists" });
  }

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Continue with the rest of the code
  try {
    const result = await sql.query(
      `insert into [User](email, password, name) values ('${email}', '${hashedPassword}', '${name}')`
    );
    res.status(201).json({ message: "user successfully", result });
  } catch (err) {
    next(new ApiError(401, err.message));
  }
});

router.post("/signIn", async (req, res, next) => {
  const { email, password } = req.body;
  const result = await sql.query(
    `select * from [User] where email = '${email}'`
  );
  if (result.recordset.length === 0) {
    return next(new ApiError(400, "email not register"));
  }
  const user = result.recordset[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ApiError(400, "email or password is not valid"));
  }
  // session token
  const token = await jwt.sign({ id: user.id, user }, process.env.JWT_SECRET);
  res.status(200).json({ message: "login successfully", token });
});

export default router;
