import { Router } from "express";

import aceitunasViewController from "../controllers/aceitunas/aceitunasViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",(req,res)=>{
    aceitunasViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    aceitunasViewController.getById(req,res);
});

router.get("/new",aceitunasViewController.createForm);

router.post("/",(req,res)=>{
    aceitunasViewController.create(req,res);
});

router.get("/:id/edit",aceitunasViewController.updateForm);

router.post("/:id",(req,res)=>{
    aceitunasViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    aceitunasViewController.remove(req,res);
});

export default router;
