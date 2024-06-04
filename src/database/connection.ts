import { Sequelize } from "sequelize-typescript";


const sqliteDb = new Sequelize({
    // get from .env files
  dialect: "sqlite",
  storage: __dirname + '/expressapiDB.db',
  models: [__dirname + "/models"],
});

// export const connect_db = async () => {
//     try {
//         await sqliteDb.authenticate();
//         console.log('Connection has been established successfully.');
//         sqliteDb.sync().catch(
//             (err:any) => {console.log('there is a problem syncing database')}
//         )
//       } 
//       catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }
sqliteDb.sync().then( () => {console.log("sync complete")})

console.log(__dirname + "/models")

export default sqliteDb