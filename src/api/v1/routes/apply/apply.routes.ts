
import { Router } from "express";
import GetApplyController from "../../controllers/apply/GetApply.controller";
const applyRoutes = Router();

applyRoutes
    .get("/", GetApplyController)
    .get('/:id', GetApplyController)

export { applyRoutes }
