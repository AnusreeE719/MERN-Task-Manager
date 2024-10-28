import express from 'express';
import { createTask, deleteTask, getAllTasks, getTask, markTaskComplete, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.put('/:id/status', markTaskComplete);
router.delete('/:id', deleteTask);

export default router;