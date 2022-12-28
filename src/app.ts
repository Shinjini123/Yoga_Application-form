import express from "express";
import { PrismaClient } from "@prisma/client";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { Request,Response,NextFunction } from "express";
import UserRoutes from './routes/userroutes'
import   batchRoutes from './routes/batchroutes'
import SubscriptionRoute from './routes/subscriptionroutes'
import errorHandler from "./error/errorHandler";
const app = express();
const PORT = 3009 ;

export const prisma = new PrismaClient();

// compresses all the responses
app.use(compression());
// make the headers secure
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', UserRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send('Yoga Form API');
});
//batch router
app.use('/batch',batchRoutes);
// subscription route
app.use('/subscription', SubscriptionRoute)

// error handler
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Yoga server is running on port ${PORT}`);
})
export default app;