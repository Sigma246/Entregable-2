"use strict";

/**
 * This middleware verify if the user is a root user
 * 
 
 */
import jwt from 'jsonwebtoken';
import { secret } from '../../config/jwt';

const validationJWT = (token: string) => jwt.verify(token, secret);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (req: any, res: any, next: () => void) =>{
    try {
        await validationJWT(req.headers['x-auth-token']);
        next()    
    } catch (error) {
        res.io({ code: 403, message: "error.token",  data: { error } })
    }   
}