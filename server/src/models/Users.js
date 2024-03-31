import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },

    sex: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true})

// User models come with methods like findOne, for example, but we can also make our own
// The following will be a static signup method
// "this" refers to the User


userSchema.statics.signup = async function(name, lastName, sex,  email, password) {

    // Validation

    if (!email || !password)
    {
        throw Error("Email and password are required")
    }

    if (!validator.isEmail(email))
    {
        throw Error("Email is not valid")
    }

    if (!validator.isStrongPassword(password))
    {
        throw Error("Password is not strong enough")
    }

    const exists = await this.findOne({email})

    if(exists)
    {
        throw Error("Email already exists.")   
    }

    // Hash Password
    const hash = await bcrypt.hash(password, 10)

    const user = await this.create({name, lastName, sex, email, password: hash})

    return user

}


userSchema.statics.login = async function(email, password)
{
    if (!email || !password)
    {
        throw Error("Email and password are required")
    }

    const user = await this.findOne({email})

    if(!user)
    {
        throw Error("Invalid credentials.")   
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw Error("Invalid credentials.")   
    }

    return user
}


export const UserModel = mongoose.model("users", userSchema);