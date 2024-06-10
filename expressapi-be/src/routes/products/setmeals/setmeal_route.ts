import {setMealController} from "../../../controllers/products";
import express from 'express';

const router = express.Router();

router.get("/:setmeal_id", setMealController.getSetMeal)

export const setMealsRoute = router;