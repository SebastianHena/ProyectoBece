import { Router } from "express";
import * as controller from "../controllers/user.controllers"

export const router = Router(); 

router.get("/", (req,res)=>{
    res.send("<h1>hola mundo</h1>")
});

router.get("/user",controller.findAllUser);

router.get("/user/:id",controller.findUser);

router.post("/user",controller.insertUser);

router.put("/user", controller.updateUser);

router.delete("/user/:id", controller.deleteUser);
export default router;