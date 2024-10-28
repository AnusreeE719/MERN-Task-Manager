import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
},
{
    timestamps:true
})

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;