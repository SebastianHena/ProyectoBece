import express from "express";
import message from "./config/message.js";
import envairoment from "./config/envairoment";
import allRoutes from "./routes/user.routes";
const app = express();
app.set("PORT",process.env.PORT || 3005)

app.use(express.json());

app.use("/api",allRoutes);

export default app;

// app.listen(app.get("PORT"),()=>{
//     message(`esta conectado al puerto:${app.get("PORT")}`,"info");
// });
