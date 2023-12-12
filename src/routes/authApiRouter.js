import { Router } from "express";

import authController from "../controllers/auth/authController.js"

const router = Router();



router.post("/login",(req,res)=>{
    authController.loginApi(req,res);
})

router.post("/logout",(req,res)=>{
    authController.logoutApi(req,res);
})


router.post("/register",(req,res)=>{
    authController.registerApi(req,res);
})

router.get("/logout",authController.logout)

export default router;