import express from "express"
import productRoutes from "./products"


const router = express.Router();


/* /api/v1/teamsit/products
*/
router.use("/teamsit", productRoutes);

export const allRoutes = router;
