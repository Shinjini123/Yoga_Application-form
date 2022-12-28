import { Router } from "express";
import * as SubscriptionController from '../controller/payment_controller';
import SubscriptionValidation from "../validations/subscriptionvalidation";

const router: Router = Router();

// create subscription
router.post('/',  SubscriptionController.createSubscription);

// get all subscription
router.get('/', SubscriptionController.getAllSubscription);

// get subscription
router.get('/:id', SubscriptionController.getSubscription);

// patch subscription
router.patch('/:id', SubscriptionController.updateSubscription);

// delete subscription
router.delete('/:id', SubscriptionController.deleteSubscription);

export default router;
