import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost); //auth dediği auth middleware den geliyor. auth olmadan post yaratılamaz
router.patch("/:id", auth, updatePost); //auth dediği auth middleware den geliyor. auth olmadan post güncellenemez
router.delete("/:id", auth, deletePost); //auth dediği auth middleware den geliyor. auth olmadan post silinemez
router.patch("/:id/likePost", auth, likePost); //auth dediği auth middleware den geliyor. auth olmadan post beğenilemez
export default router;

//http://localhost:5000/posts
