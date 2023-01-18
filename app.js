import express from "express";
import router from "./routes.js";
import "./dbConnect.js";
let app = express();
let port = 4000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server on ${port}`);
});