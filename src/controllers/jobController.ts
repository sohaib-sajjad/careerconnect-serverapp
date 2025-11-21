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

    async getJob(req: Request, res: Response) {
        try {
            const job = await Job.findById(req.params.id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json(job);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateJob(req: Request, res: Response) {
        try {
            const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json(job);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

     async deleteJob(req: Request, res: Response) {
        try {
            const job = await Job.findByIdAndDelete(req.params.id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new JobController();