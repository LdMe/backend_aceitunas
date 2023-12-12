import { Router } from "express";

import aceitunasApiController from "../controllers/aceitunas/aceitunasApiController.js";
import {isAuthenticatedApi,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticatedApi,(req,res)=>{
    aceitunasApiController.getAll(req,res);
});

router.get("/new",isAdmin,aceitunasApiController.createForm);

router.get("/:id",(req,res)=>{
    aceitunasApiController.getById(req,res);
});


router.post("/",isAdmin,(req,res)=>{
    aceitunasApiController.create(req,res);
});

router.get("/:id/edit",isAdmin, aceitunasApiController.updateForm);

router.post("/:id",isAdmin,(req,res)=>{
    aceitunasApiController.update(req,res);
});

router.get("/:id/delete",isAdmin,(req,res)=>{
    aceitunasApiController.remove(req,res);
});

export default router;
