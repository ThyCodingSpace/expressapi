import {burgerController} from "../../../controllers/products";
import express from 'express';


const router = express.Router();


// TODO: controller
router.get("/burgers/:burg_id", burgerController.getBurger)

export const burgerRoutes = router;