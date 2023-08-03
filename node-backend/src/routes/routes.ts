import { Router } from "express";
import { getDepartments } from "../controllers/department-controller";
import { getEmployees } from "../controllers/employee.controller";
import { getEvents } from "../controllers/event-controller";

const router: Router = Router();

router.get("/departments", getDepartments);
router.get("/employees", getEmployees);
router.get("/events", getEvents);


export default router;