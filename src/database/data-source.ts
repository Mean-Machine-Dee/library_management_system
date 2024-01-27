import "reflect-metadata"
import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PORT, DB_USER,DB_PASSWORD } from "../config"
import { User } from "../entities/user.entity"


export const AppDataSource = new DataSource({
    type:"postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT!) ||5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    logging:true,
    entities:[User],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers:[]
})