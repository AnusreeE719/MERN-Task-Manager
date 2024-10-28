import taskModel from "../models/taskModel.js";

//CREATE NEW TASK

export const createTask = async (req, res) => {
    const { title, description } = req.body

    try{
        if(!title || !description){
            return res.status(400).json({success:false, message:"All fields required"});
        }
    
        const Task = new taskModel({title, description})
        await Task.save();
        res.status(201).json({success:true, message:"Task created", data:Task})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
}

//GET ALL TASKS

export const getAllTasks = async (req, res) => {
    try{
        const tasks = await taskModel.find({});
        res.status(200).json({success:true, data:tasks})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
}

//GET ONE TASK BY ID

export const getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await taskModel.findById(id);
        return res.status(200).json(task);
    }catch(error){
        console.log(error.message);
        res.status(500).send({ success:false, message:"Server error" });
    }
}

//UPDATE TASK

export const updateTask = async (req, res) => {
    const {title, description} = req.body;

    try{
        if(!title || !description){
            return res.status(400).json({success:false, message:"All fields required"});
        }

        const {id} = req.params;
        const result = await taskModel.findByIdAndUpdate(id, {title, description}, { new: true })
        if(!result){
            return res.status(404).json({success:false, message:"Task not found"})
        }
        return res.status(200).json({success:true, message:"Task updated successfully"})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
}

//MARK COMPLETED

export const markTaskComplete = async (req, res) => {
    const { completed } = req.body;

    try{
        const {id} = req.params;
        const result = await taskModel.findByIdAndUpdate(id,{$set:{completed}}, {new: true});
        if(!result){
            return res.status(404).json({success:false, message:"Task not found"})
        }
        return res.status(200).json({success:true, message:"Task status updated successfully"})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
}

//DELETE TASK

export const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await taskModel.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({success:false, message:"Task not found"})
        }
        return res.status(200).json({success:true, message:"Task deleted successfully"})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
}
