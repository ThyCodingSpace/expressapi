
import express, { Express, Request, Response , Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import { allRoutes } from './routes/routes.js';
import './database/connection.js';
import { connect_db } from './database/connection.js';
import cors from "cors";
import User from './models/users.js';


export const CORS_WHITELIST = [
    
  ];

//For env File 
dotenv.config();
connect_db();
const server: Application = express();
const PORT = process.env.PORT || 8002;
// app.use(cors({ origin: CORS_WHITELIST }));
// app.use(function (req: Request, res: Response, next: NextFunction) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

server.use(express.json()) // for express to parse json
server.use("/api/v1", allRoutes)


server.get("/", (req: Request, res: Response) => res.send("Server running..."));

/* exmaple post request */
server.post("/api/user", async (req: Request, res: Response) => {
    const data = req.body
    console.log(data)
    
    const user = await User.create(data)
    
    return res.status(201).json(user)
} )

server.listen(PORT, () => {`Server running on port ${PORT}`});