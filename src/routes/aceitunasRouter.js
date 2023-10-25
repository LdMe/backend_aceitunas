import { Router } from "express";

import aceitunasController from "../controllers/aceitunas/aceitunasController.js";


const router = Router();

router.get("/",(req,res)=>{
    aceitunasController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    aceitunasController.getById(req,res);
});

router.post("/",(req,res)=>{
    aceitunasController.create(req,res);
});

router.put("/:id",(req,res)=>{
    aceitunasController.update(req,res);
});

router.delete("/:id",(req,res)=>{
    aceitunasController.remove(req,res);
});

export default router;
