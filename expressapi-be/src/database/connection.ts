import { Sequelize } from "sequelize-typescript";
import path from 'path'


const parentDir = path.dirname(__dirname);
const sqliteDb = new Sequelize({
    // get from .env files
  dialect: "sqlite",
  storage: __dirname + '/expressapiDB.db',
  models: [ parentDir + '/models' ], // point to directory with all the models
  logging: false // change if you need to see log
});

export const connect_db = async () => {
    try {
        console.log('Connection has been established successfully.');
        sqliteDb.sync({ alter: true }).catch( // change the option for altering the db / drop table
            (err:any) => {console.log('there is a problem syncing database')}
        ).then(()=> {console.log("DB sync complete")}) // this syncs the models to database on server start up.
      } 
      catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default sqliteDb