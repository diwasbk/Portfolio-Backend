import express from "express"
import { PORT } from "./config/config.js"
import contactRouter from "./routes/contactRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use("/api/contact", contactRouter);

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