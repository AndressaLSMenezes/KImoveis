import "reflect-metadata"
import "express-async-errors"
import express from "express"

import handleAppError from "./Middlewares/handleAppError.middleware";
import userRouter from "./Routers/users.routers";
import loginRouter from "./Routers/login.router";
import categoriesRouter from "./Routers/categories.routers";
import propertiesRouter from "./Routers/properties.routers";
import schedulesRouter from "./Routers/schedules.routers";


const app = express()
app.use(express.json())
app.use("/users", userRouter);
app.use("/login", loginRouter)
app.use("/categories", categoriesRouter)
app.use("/properties", propertiesRouter)
app.use("/schedules", schedulesRouter)


app.use(handleAppError);

export default app