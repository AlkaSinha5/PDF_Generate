import express from "express";
import database from "./config/mongodb.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
database();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/",(req,res)=>{
//     res.send("hello from server side")
// })
app.use("/api",routes )


app.use('/receipts', express.static(process.cwd() + '/receipts'))



app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});

export default app;
