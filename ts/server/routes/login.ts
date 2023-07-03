import express from 'express';
const router = express.Router();

import { find } from '../controller/login_controller';


router
    .route(`/login`)
        .post( find );


export default router;