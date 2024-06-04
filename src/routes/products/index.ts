const express = require('express')
import { burgerRoutes } from "./burgers/burger";

const router = express.Router();

router.use('/products', burgerRoutes)

export default router;