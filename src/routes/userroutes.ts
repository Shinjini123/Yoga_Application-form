import { Router } from "express";
import * as UserController from '../controller/userController';
import userformvaalidation from "../validations/userformvalidation";

const router: Router = Router();

// create user
router.post('/', userformvaalidation, UserController.createUser);

// get all user
router.get('/', UserController.getAllUser);

// get user
router.get('/:id', UserController.getUser);

// patch user
router.patch('/:id', userformvaalidation, UserController.updateUser);

// delete user
router.delete('/:id', UserController.deleteUser);

export default router;