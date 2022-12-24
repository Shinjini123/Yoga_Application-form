import { Router } from "express";
import * as payment_controller from '../controller/payment_controller';
import subscriptionformvalidation from "../validations/subscriptionvalidation";

const router: Router = Router();

// get payment
router.get('/:id',subscriptionformvalidation,payment_controller.get_payment);
export default router
