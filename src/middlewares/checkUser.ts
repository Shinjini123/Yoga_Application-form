import { Request, Response, NextFunction } from 'express';
import {prisma } from '../app';
import { User} from '@prisma/client';
import ApiError from '../error/APIerror';

const user = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { userId } = req.body;
    console.log('Batch Id', userId);
    if (!userId) next(ApiError.badRequest('User Id required'));
    const user = await prisma.batch.findUnique({
        where: {
            id: userId,
        },
    });
    console.log('user', user);

}
export default user;