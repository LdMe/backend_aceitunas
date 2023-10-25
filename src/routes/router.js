import { Router } from "express";

import aceitunasRouter from "./aceitunasRouter.js";

const router = Router();

router.use("/aceitunas",aceitunasRouter);



export default router;



