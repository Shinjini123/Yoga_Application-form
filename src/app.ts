import express from "express";
import { PrismaClient } from "@prisma/client";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { Request,Response,NextFunction } from "express";
import  router from "./routes/userroutes";
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

app.listen(PORT, ()=> {
    console.log(`Yoga server is running on port ${PORT}`);
})