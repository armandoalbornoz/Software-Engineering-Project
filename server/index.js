import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

import {userRouter} from "./src/routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://ehengber:BMITracker123@bmis.maiqzpx.mongodb.net/bmis?retryWrites=true&w=majority&appName=BMIs"
);

app.listen(3001, () => console.log("SERVER STARTED!"));