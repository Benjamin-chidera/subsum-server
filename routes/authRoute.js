import { Router } from "express";
import passport from "passport";
import {
  signUp,
  signIn,
  googleAuth,
  googleAuthCallback,
} from "../controllers/authControllers.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleAuthCallback
);

export default router;
