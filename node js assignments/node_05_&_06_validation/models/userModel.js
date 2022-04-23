import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createDate:{
        type: Date,
        default:new Date()
    }
})


const UserModel = mongoose.model("user", UserSchema);  
export default UserModel;