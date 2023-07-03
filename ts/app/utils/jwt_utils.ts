'use strict';

import jwt from 'jsonwebtoken';
import { secret } from '../../config/jwt';

export const vify_jwt = (token:any) => new Promise((resolve, reject) => jwt.verify(token, secret, (err:any, decoded:any) => { decoded == undefined ? reject(err) : resolve(decoded) }))