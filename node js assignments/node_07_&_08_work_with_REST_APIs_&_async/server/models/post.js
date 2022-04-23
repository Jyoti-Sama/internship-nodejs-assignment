import mongoose from 'mongoose';

const ExpenceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
}) 

const ExpenceModel = mongoose.model("expence", ExpenceSchema);
export default ExpenceModel;