import express from "express"
import { setMealsRoute } from "./setmeals/setmeal_route";

const router = express.Router();

router.use('/products/setmeals', setMealsRoute)
// router.use('/products/alecartes', burgerRoutes)

export default router;