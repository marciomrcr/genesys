import express from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateRoleController } from "../controllers/CreateRoleController";
import { CreatePermissionController } from "../controllers/CreatePermissionController";
import { CourseController } from "../controllers/CourseController";
import { ClassController } from "../controllers/ClassController";


const router = express.Router()

const createUserController = new CreateUserController()
router.post("/users", createUserController.handle)

const createRoleController = new CreateRoleController()
router.post('/roles', createRoleController.handle)

const createPermissionController = new CreatePermissionController()
router.post('/permissions', createPermissionController.handle)

const courseController = new CourseController()
router.post('/courses', courseController.handle )

const classController = new ClassController()
router.post('/classes', classController.handle)




export default router