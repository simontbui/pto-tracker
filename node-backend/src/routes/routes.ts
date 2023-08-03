import { Router } from "express";
import { getDepartments } from "../../controllers/department-controller";

const router: Router = Router();

router.get("/departments", getDepartments);

export default router;