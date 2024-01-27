import { Request, Response, NextFunction } from "express"

export default class UserController{
    

    async allUser(req: Request, res: Response, next: NextFunction) {
        res.json({message:"created", users:[]})
}
    async createUser(req: Request, res: Response, next: NextFunction) {
        const {name, email,password,role } = req.body
        res.json({message:"created"})
    }
}