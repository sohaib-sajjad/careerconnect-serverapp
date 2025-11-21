import { Request, Response } from 'express';
import Job from '../models/job';

class JobController {
    async createJob(req: Request, res: Response) {
        try {
            const job = new Job(req.body);
            await job.save();
            res.status(201).json(job);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    
}

export default new JobController();