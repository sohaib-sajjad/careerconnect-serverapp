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

    async getOrganization(req: Request, res: Response) {
        try {
            const organization = await Organization.findById(req.params.id);
            if (!organization) {
                return res.status(404).json({ message: 'Organization not found' });
            }
            res.json(organization);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

     async updateOrganization(req: Request, res: Response) {
        try {
            const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!organization) {
                return res.status(404).json({ message: 'Organization not found' });
            }
            res.json(organization);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new OrganizationController();