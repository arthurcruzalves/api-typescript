import express from "express";
import router from "./routers/userRouter";
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use("/api",router);

app.listen(port,()=>{
    console.log(`Servidor online em http://127.0.0.1:${port}`);
});


