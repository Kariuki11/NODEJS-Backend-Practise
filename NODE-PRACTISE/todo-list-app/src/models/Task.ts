import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
    name: string;
    description: string;
    status: boolean;
}

const TaskSchema = new Schema<ITask>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default model<ITask>('Task', TaskSchema);