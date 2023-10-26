import { Router } from "express";

import authController from "../controllers/auth/authController.js"

const router = Router();

router.get("/login",(req,res)=>{
    authController.login(req,res);
})

export default router;