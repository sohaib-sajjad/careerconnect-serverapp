import { Router } from 'express';
import orgController from '../controllers/orgControllers';

const router = Router();

router.post('/', orgController.createOrganization);
router.get('/:id', orgController.getOrganization);
router.put('/:id', orgController.updateOrganization);
router.delete('/:id', orgController.deleteOrganization);
router.get('/', orgController.getAllOrganizations);

export default router;