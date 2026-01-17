import express from "express"
import { PORT } from "./config/config.js"

const app = express();
app.use(express.json());

const startServer = ()=>{
    try{
        app.listen(PORT, ()=>{
            console.log(`Server is running at the port ${PORT}.`);
        })
    }catch(err){
        console.log("Failed to start server:", err);
        
    };
};

startServer();