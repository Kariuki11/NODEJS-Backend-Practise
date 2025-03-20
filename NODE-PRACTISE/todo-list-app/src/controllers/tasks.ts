import { Request, Response } from 'express';
import Task from '../models/Task';

// Create a new Task
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const task = new Task({title, description });
        await task.save();
        
    }
}