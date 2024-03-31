
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";


const auth = async (req, res, next) => {
    // verify authentication

    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:"Authorization token is required"})
    }

    //Parse token from the header. Header is of the form "Bearer 23sdfsdfcwef.23rdf23d.sdv2efvwd"

    const token = authorization.split(" ")[1];

    //Make sure token has not been tampered


    try{
        const {_id} = jwt.verify(token, process.env.SECRET)

        //Select just gives us a documetn with the id
        req.user = await UserModel.findById(_id).select('_id')
        next()
    }
    catch (err)
    {
        console.log(err);
        res.status(401).json({error: "Not Authorized"})
    }
}

export {auth}