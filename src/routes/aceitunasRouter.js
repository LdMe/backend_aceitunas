import { Router } from "express";

import aceitunasViewController from "../controllers/aceitunas/aceitunasViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();
console.log("hola");
router.get("/",(req,res)=>{
    aceitunasViewController.getAll(req,res);
});

router.get("/new",isAdmin,aceitunasViewController.createForm);

router.get("/:id",(req,res)=>{
    aceitunasViewController.getById(req,res);
});


router.post("/",isAdmin,(req,res)=>{
    aceitunasViewController.create(req,res);
});

router.get("/:id/edit",isAdmin, aceitunasViewController.updateForm);

router.post("/:id",isAdmin,(req,res)=>{
    aceitunasViewController.update(req,res);
});

router.get("/:id/delete",isAdmin,(req,res)=>{
    aceitunasViewController.remove(req,res);
});

export default router;
