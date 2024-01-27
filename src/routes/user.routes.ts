import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes{
    router = Router()
    controller = new UserController()


    constructor(){
        this.initilizeRoutes()
    }


    private initilizeRoutes(){
        this.router.get("/", this.controller.allUser)
    }

}

export default new UserRoutes().router