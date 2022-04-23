import mongoose from "mongoose"

const DATABASE_URL = "mongodb+srv://internship_guy:internship_pass@cluster0.cxfiw.mongodb.net/internship?retryWrites=true&w=majority"


export const dbConnect = () => {
    mongoose.connect(DATABASE_URL)
    .then(() => console.log("db connected..."))
    .catch(err => console.log(err.message))
}