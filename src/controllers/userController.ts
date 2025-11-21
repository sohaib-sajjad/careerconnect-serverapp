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
}

export default new UserController();