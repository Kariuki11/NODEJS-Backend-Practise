import { Request, Response } from 'express';
import Task from '../models/Task';

// Create a new Task
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const task = new Task({title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

// Get all Tasks

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }   catch (error) {
        res.status(503).json({ message: 'Service Unavailable' });
    }
}

// Get Task by ID