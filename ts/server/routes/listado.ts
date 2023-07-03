import express from 'express';
const router = express.Router();


import { getListado } from '../controller/listado_controller';
import {  default as permission } from '../middlewares/jwtVerify_middleware';

router
    .route(`/listado`)
        .get(permission, getListado );


export default router;