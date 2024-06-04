
import express, { Express, Request, Response , Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import { allRoutes } from './routes/routes.js';
import './database/connection.js';
import cors from "cors";
import User from './database/models/users.js';


export const CORS_WHITELIST = [
    
  ];

//For env File 
dotenv.config();
// connect_db();
const server: Application = express();
const PORT = process.env.PORT || 8002;
// app.use(cors({ origin: CORS_WHITELIST }));
// app.use(function (req: Request, res: Response, next: NextFunction) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


server.use("/api/v1", allRoutes)
server.get("/", (req: Request, res: Response) => res.send("Server running..."));

server.post("/api/user", async (req: Request, res: Response) => {
    const data = {
        id: 333,
        firstName: "John",
        lastName: "Doe",
        age: 120
    }
    
    const user = await User.create(data)
    
    return res.status(201).json(user)
} )

server.listen(PORT, () => {`Server running on port ${PORT}`});