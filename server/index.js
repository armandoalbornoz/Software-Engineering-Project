import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ehengber:BMITracker123@bmis.maiqzpx.mongodb.net/BMIs?retryWrites=true&w=majority&appName=BMIs")

app.listen(3001, () => console.log("SERVER STARTED!"));