import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import taskRouter from './routes/taskRoute.js'

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const MongoDBURI = process.env.MONGODB_URI;
const port = process.env.PORT;

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack project');
})

app.use('/tasks', taskRouter)

mongoose
    .connect(MongoDBURI)
    .then(() => {
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })