import { Request, Response } from "express";

export const getBurger = async ( req: Request, res: Response ) => {
    const burgerId = req.params.burg_id
    console.log("The burger id is " + burgerId)

    // perform action in service to get details of burger using burger ID. (burger service)

    // return status code and the data (data returned by the service in object)

    res.status(200).json({"data": "its a mcspicy", "burgerid": burgerId});

}