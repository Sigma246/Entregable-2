'use strict';
/*************************************************
 * JWT configuration variables                   *
 *                                               *
   *
 *************************************************/

interface auth {
    expiresIn: number
}


export const header = "x-auth-token";
export const secret: string = process.env.JWT_SECRET || "tddDjg5zse$kpDndyecykuwc^4i8tprecgzhvn^kwyjxqrwgsXet^YHngjqufka,";
export const auth:auth = {
    expiresIn: process.env.JWT_AUTH_EXPIRESIN? Number(process.env.JWT_AUTH_EXPIRESIN) : 60 * 60 * 1 // 5 hours in seconds
};


