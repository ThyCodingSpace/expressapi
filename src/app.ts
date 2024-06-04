
import express, { Express, Request, Response , Application,NextFunction } from 'express';
import dotenv from 'dotenv';
import { allRoutes } from './routes/routes';
import cors from "cors";
export const CORS_WHITELIST = [
    
  ];

//For env File 
dotenv.config();

const server: Application = express();
const PORT = process.env.PORT || 8002;

// app.get('/', (req: Request, res: Response) => {
// //   res.send('Welcome to Express & TypeScript Server');
// });
// app.use(cors({ origin: CORS_WHITELIST }));
// app.use(function (req: Request, res: Response, next: NextFunction) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


server.use("/app/v1", allRoutes)

server.get("/", (req: Request, res: Response) => res.send("Server running..."));
server.listen(PORT, () => {`Server running on port ${PORT}`});