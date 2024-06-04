const express = require('express')
import productRoutes from "./products"

import { Request , Response } from 'express';


const router = express.Router();

router.use("/teamsit", productRoutes);

export const allRoutes = router;


// /api/v1/teamsit/products/burgers/{burgerID}