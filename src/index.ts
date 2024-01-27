import express, {Application} from "express"
import cors, {CorsOptions} from "cors"
import { PORT } from "./config"
import { AppDataSource } from "./database/data-source"
import Routes from "./routes"



export default class Server{
    public app: Application
    public port: number

    constructor(){
        this.app = express()
        this.config()
        this.port = parseInt(PORT!) || 8001
        this.initializeDB()
        new Routes(this.app)
    }


    private config() : void {
        const corsOptions : CorsOptions = {

        }
        this.app.use(cors(corsOptions))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended:true}))
    }

    private initializeDB(){
        AppDataSource.initialize().then(async  () =>{
            console.log('Datasource connected')
        }).catch((err: any) => console.log(err))
    }

    public listen() : void {
        this.app.listen(this.port, () =>{
            console.log(`Server started at ${this.port}`)
        }).on("error", (err: any) =>{
            console.log(err)
        })
    }
}