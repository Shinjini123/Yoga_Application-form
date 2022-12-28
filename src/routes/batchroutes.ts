import { Router } from "express";
import * as batchController from '../controller/batchController';

const router: Router = Router();

// create batch
router.post('/', batchController.createBatch);

// get batch
router.get('/:id', batchController.getBatch);

// patch user
router.patch('/:id', batchController.updateBatch);

// delete user
router.delete('/:id', batchController.deleteBatch);

export default router;