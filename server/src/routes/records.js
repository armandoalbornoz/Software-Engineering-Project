import express from "express";
import { RecordModel } from "../models/Records.js";
import mongoose from "mongoose";


const router = express.Router()

// Get all records
router.get('/', async (req , res) => {
    try
    {
        const records = await RecordModel.find({}).sort({createdAt: -1})
        res.status(200).json(records)
    }
    catch (err) 
    {
        res.status(400).json({err: err.message})
    }
})

// Get a single records
router.get('/:id', async (req , res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({err: "No such record"})
    }

    try
    {
        const record = await RecordModel.findById(id)

        if(!record)
        {
            return res.status(404).json({err: "No such record"})
        }

        res.status(200).json(record)
    }
    catch (err) 
    {
        res.status(400).json({err: err.message})
    }
})


// Create a single records
router.post('/', async (req , res) => {
    const {height, weight, message} = req.body
    try
    {
        const record = await RecordModel.create({height,weight,message})
        res.status(200).json(record)
    }
    catch (err) 
    {
        res.status(400).json({err: err.message})
    }
})

// Delete a single records
router.delete('/:id', async (req , res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({err: "No such workout"})
    }
    
    try
    {
        const record = await RecordModel.findOneAndDelete({_id: id})

        if(!record)
        {
            return res.status(404).json({err: "No such workout"})
        }

        res.status(200).json(record)
    }
    catch (err) 
    {
        res.status(400).json({err: err.message})
    }
})

// Update a single record
router.patch('/:id', async (req , res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({err: "No such workout"})

    }
    
    try
    {
        const record = await RecordModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        if(!record)
        {
            return res.status(404).json({err: "No such workout"})
        }

        res.status(200).json(record)
    }
    catch (err) 
    {
        res.status(400).json({err: err.message})
    }
})

export { router as recordRouter };