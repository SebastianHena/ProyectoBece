import path from "path";
import dontenv from "dotenv";

dontenv.config({
    "path":path.resolve(__dirname,`${process.env.NODE_ENV}.env`)
});
