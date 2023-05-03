import { Router } from "express";

const router = Router();

router.get("/back", (req, res)=>{
    res.render("index",{nombre:''});
});



export default router