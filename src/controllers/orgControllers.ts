import { Request, Response } from 'express';
import organizationModel from '../models/organization';

class OrganizationController {
    async createOrganization(req: Request, res: Response) {
        try {
            const organization = new organizationModel(req.body);
            await organization.save();
            res.status(201).json(organization);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}

export default new OrganizationController();