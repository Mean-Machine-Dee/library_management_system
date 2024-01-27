import {config} from "dotenv"
config({ path: `.env.${process.env.NODE_ENV || 'dev' }`})

export const {
    EXPIRES_IN,
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD
} = process.env
