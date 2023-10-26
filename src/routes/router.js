import { Router } from "express";

import aceitunasRouter from "./aceitunasRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/aceitunas",aceitunasRouter);

router.use("/",authRouter);

export default router;



