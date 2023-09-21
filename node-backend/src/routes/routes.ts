import { Router } from "express";
import { getDepartments } from "../controllers/department-controller";
import { getEmployees } from "../controllers/employee-controller";
import { getEvents } from "../controllers/event-controller";
import { getEventDetails } from "../controllers/event-details-controller";
import { login } from "../controllers/login-controller";
import { logout } from "../controllers/logout-controller";

const router: Router = Router();

router.get("/departments", getDepartments);
router.get("/employees", getEmployees);
router.get("/events", getEvents);
router.get("/event-details", getEventDetails);
router.post("/login", login);
router.post("/logout", logout);


export default router;