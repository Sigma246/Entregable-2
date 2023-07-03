'use strict';

/************************************************
 * Routes for the module ping                   *
 *                                              *
  *
 ************************************************/
import login from './login';
import users from './users';
import listado from './listado';


import { Router } from "express";

const router = Router();

/**
 * Route to map:
 *  get: /welcome/
 */
router.use("/", login);
router.use("/", users);
router.use("/", listado);


export default router;
