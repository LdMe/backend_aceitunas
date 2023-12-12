import { Router } from "express";

import aceitunasRouter from "./aceitunasRouter.js";
import authRouter from "./authRouter.js";
import aceitunasApiRouter from "./aceitunasApiRouter.js";
import authApiRouter from "./authApiRouter.js";

const router = Router();

router.use("/aceitunas",aceitunasRouter);

router.use("/",authRouter);

router.use("/api/aceitunas",aceitunasApiRouter);
router.use("/api/auth",authApiRouter);

export default router;



