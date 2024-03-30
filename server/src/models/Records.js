import mongoose from "mongoose";

// In mongoose, a schema represents the structure of a particular document, 

const Schema = mongoose.Schema

const recordSchema = new Schema({
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    message: {
        type: String,
    }
}, {timestamps: true})


/*
    A model defines a programming interface for interacting with the database (read, insert, update, etc).
    So a schema answers "what will the data in this collection look like?" and a model provides functionality like
    "Are there any records matching this query?" or "Add a new document to the collection". (the model creates a collection automatically)
*/

export const RecordModel = mongoose.model("record", recordSchema);

