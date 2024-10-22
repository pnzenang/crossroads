import { Router } from 'express';
const router = Router();
import {
  getAllPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage,
} from '../3-controllers/packagesController.js';
import {
  validatePackageInput,
  validateIdParam,
} from '../6-middleware/validationMiddleware.js';

router.route('/').get(getAllPackages).post(validatePackageInput, createPackage);
router
  .route('/:id')
  .get(validateIdParam, getPackage)
  .patch(validatePackageInput, updatePackage)
  .delete(validateIdParam, deletePackage);

export default router;
