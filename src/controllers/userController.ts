import { Request, Response } from 'express';
import User from '../models/user';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

     async getUser(req: Request, res: Response) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new UserController();