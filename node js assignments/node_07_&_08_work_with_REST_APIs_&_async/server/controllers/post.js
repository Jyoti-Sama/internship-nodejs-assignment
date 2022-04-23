import ExpenceModel from "../models/post.js"


export const getPosts = async (req, res) => {

    try {
        const expences = await ExpenceModel.find();
        console.log(expences)
        res.status(200).json(expences)
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
    
}


export const createPost = async (req, res) => {

    const {title, amount} = req.body;
    console.log(req.body)

    if(!(title && amount)) return res.status(409).json({message:"all inpus are required"})
    const newExpence = new ExpenceModel({title, amount});

    try {
        const expences = await newExpence.save();
        console.log(expences)
        res.status(201).json(expences)
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}


export const deletePost = async (req, res) => {

    const {_id} = req.body;
    console.log(req.body)

    if(!_id) return res.status(409).json({message:"all inpus are required"})

    try {
        const expences = await ExpenceModel.findByIdAndDelete(_id)
        console.log(expences)
        res.status(201).json(expences)
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}