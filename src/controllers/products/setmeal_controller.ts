import { Request, Response } from "express";
import {setmealservice} from "../../services"



export const getSetMeal = async ( req: Request, res: Response ) => {
    const setMealId = req.params.setmeal_id
    
    // getting setmeal data from data base in service..
    const data = await setmealservice.getSetmeal(setMealId as unknown as number)
    
    if (!data) {
        // Handle case where no data is found
        return res.status(404).json({ message: 'Set meal not found' });
    }

    res.status(200).json(data);

}