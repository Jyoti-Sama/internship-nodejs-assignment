import mongoose from "mongoose";

const DATABASE_URI = "mongodb+srv://internship_guy:internship_pass@cluster0.cxfiw.mongodb.net/internship?retryWrites=true&w=majority";

const dbConnect = () => {
    mongoose.connect(DATABASE_URI)
    .then(() => console.log("database connected..."))
    .catch(err => console.log(err.message))
}

export default dbConnect;