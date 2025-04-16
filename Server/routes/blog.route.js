import express from "express";
import { deleteBlog, getAllBlogs, postBlog, updateBlog } from "../controllers/blog.js";
import jwt from "jsonwebtoken";

export const router = express.Router();

const authunticateRouter = (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

router.get("/blogs", getAllBlogs);
router.post("/blog", authunticateRouter, postBlog);
router.delete("/blog/:blogId", authunticateRouter, deleteBlog);
router.put("/blog/:blogId", authunticateRouter, updateBlog);
