import { Request, Response, NextFunction } from 'express';
import {prisma } from '../app';
import { Batch, Payment } from '@prisma/client';
import ApiError from '../error/APIerror';
