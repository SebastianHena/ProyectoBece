import app from "../app.js";
import message from "./message.js";

export const caseEntorno = ()=>{

    switch (process.env.NODE_ENV) {
        case "developer":
            message(`Estas en el puerto:${app.get("PORT")}`,"success")
            break;
        case "qa":
            message(`Estas en el puerto:${app.get("PORT")}`,"warning")
        break;
        case "production":
            message(`Estas en el puerto:${app.get("PORT")}`,"danger")
        break;
    
        default:
            message(`Estas en el puerto:${app.get("PORT")}`,"white")
            break;
    }

} 