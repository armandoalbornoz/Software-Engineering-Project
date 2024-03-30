import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config'

import {userRouter} from "./src/routes/users.js";
import {recordRouter} from "./src/routes/records.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/records", recordRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen((process.env.PORT), () => {
        console.log(`Connected and Listening on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})

