import { Router, response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const dash = Router();

dash.get("/inicio", (req,res)=>{
    if(req.cookies.cksba){
        try {
            const token = jwt.verify(req.cookies.cksba, 
                process.env.SECRET_KEY)
                
                res.render('dash',{

                    "nombre":token.nombre,
                    "foto":token.foto,
                    "menu": 0
                });
        } catch (error) {
            res.redirect("/") 
        }
        res.render('dash');
    }else{
        res.redirect("/")
    }   
});

dash.get("/usuario", async (req, res)=>{
    if(req.cookies.cksba){
        try {
            const token = jwt.verify(req.cookies.cksba, 
                process.env.SECRET_KEY)
// CONSUMIR API
                let ruta = "http://localhost:3000/api/user"
                let option = {
                    method:"GET"
                }
                let datos= {};
                const result =  await fetch(ruta, option)
                .then(response => response.json())
                .then(data =>{
                    datos = data[0]
                    // console.log(data[0]);
                });

                
                res.render('dash',{

                    "nombre":token.nombre,
                    "foto":token.foto,
                    "menu": 1,
                    "datos":datos
                });
        } catch (error) {
            res.redirect("/") 
        }
        res.render('dash');
    }else{
        res.redirect("/")
    }   
});

dash.get("/producto", (req, res)=>{
    if(req.cookies.cksba){
        try {
            const token = jwt.verify(req.cookies.cksba, 
                process.env.SECRET_KEY)
                
                res.render('dash',{

                    "nombre":token.nombre,
                    "foto":token.foto,
                    "menu": 2
                });
        } catch (error) {
            res.redirect("/") 
        }
        res.render('dash');
    }else{
        res.redirect("/")
    }   
});

dash.get("/categoria", (req, res)=>{
    if(req.cookies.cksba){
        try {
            const token = jwt.verify(req.cookies.cksba, 
                process.env.SECRET_KEY)
                
                res.render('dash',{

                    "nombre":token.nombre,
                    "foto":token.foto,
                    "menu": 3
                });
        } catch (error) {
            res.redirect("/") 
        }
        res.render('dash');
    }else{
        res.redirect("/")
    }   
});

dash.post("/guardar", (req,res)=>{
    if(req.body.name){
         let data={
            name:req.body.name
        }
        let ruta = "http://localhost:3000/api/user";
        let method = "post";
        let option = {
            method : metodo,
            headers : {
                "Content-Type": "aplication/json"
            }, 
            body : JSON.stringify(data)
        }

        try {
            const result = fetch(ruta,option)
            .then(res=res.json())
            .then(data=>{
                console.log("datos guardados")
            })
            .catch(err=>console.log("error al consumir la api" + err))
            res.redirect("usuario")
        } catch (error) {
            
        }

    }else{
        response.send("error")
    }
});

dash.get("/salir",(req,res)=>{
     res.clearCookie("cksba")
     res.redirect("/");
});

export default dash;