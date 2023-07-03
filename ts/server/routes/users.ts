import express from 'express';
const router = express.Router();

import { add, find } from '../controller/users_controller';
import {  default as permission } from '../middlewares/jwtVerify_middleware';

router
    .route(`/user_create`)
        // save new user
        .post(permission, add );

router
    .route(`/user_list`)
        // list user
        .get(permission, find );

    

export default router;