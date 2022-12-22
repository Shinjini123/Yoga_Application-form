import express from 'express';
import { PrismaClient } from '@prisma/client';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';//cross origin resource sharing
const app=express();


const PORT =3000;

export const prisma=new PrismaClient();
//compress all the response
app.use(compression());
//makes header secure
app.use(helmet());
//to use the 
app.use(cors());
//defines a meaning
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT,()=>{
    console.log(`yoga server running on ${PORT}`);
});