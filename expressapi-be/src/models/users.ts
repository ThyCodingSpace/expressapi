import {
    Table,
    Column,
    Model,
    DataType,
  } from "sequelize-typescript";
  
  @Table({
    timestamps: false, // change to true if you need timestamp
    tableName: "users",
    modelName: "Users",
  })
  class User extends Model<UserAttributes> {
    @Column({
      primaryKey: true,
      type: DataType.INTEGER,
      defaultValue: DataType.INTEGER,
    })
    declare id: number;

    @Column({
    type: DataType.STRING,
    })
    declare firstName: string;

    @Column({
    type: DataType.STRING,
    })
    declare lastName: string;
    
    @Column({
    type: DataType.INTEGER,
    })
    declare age: number;

  }
  
  export default User;
  