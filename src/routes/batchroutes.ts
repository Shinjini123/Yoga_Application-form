import { Router } from "express";
import * as batchcontroller from '../controller/batchcontroller';

const router: Router = Router();

// create batch
router.post('/', batchcontroller.createbatch);

// get all batch
router.get('/', batchcontroller.getAllUser);

// get user
router.get('/:id', batchcontroller.getbatch);

// patch user
router.patch('/:id', batchcontroller.updateUser);

// delete user
router.delete('/:id', batchcontroller.deleteUser);

export default router;