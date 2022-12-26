import express from "express";
import { PrismaClient } from "@prisma/client";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { Request,Response,NextFunction } from "express";
import  router from "./routes/userroutes";
import errorHandler from "error/errorHandler";
const app = express();
const PORT = 3004;

export const prisma = new PrismaClient();

// compresses all the responses
app.use(compression());
// make the headers secure
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', router);
app.get('/', (req: Request, res: Response) => {
    res.send('Yoga Form API');
});
app.use('/batch',router);
// subscription route
app.use('/subscription', router)

// error handler
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Yoga server is running on port ${PORT}`);
})
export default app;