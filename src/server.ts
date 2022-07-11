import "express-async-errors";
import express from "express";
// import UserRoute from "./routes/userRoutes"
// import RoleRoute  from "./routes/roleRoute";
import router from "./routes/router";


const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("API is running"));
