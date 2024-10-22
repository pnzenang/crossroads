import { Router } from 'express';
import {
  getAllUsers,
  getApplicationStats,
  getCurrentUser,
  updateUser,
  getAllPackagesAdmin,
} from '../3-controllers/userController.js';
import { validateUpdateUserInput } from '../6-middleware/validationMiddleware.js';
import { authorizePermissions } from '../6-middleware/authMiddleware.js';

const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
]);
router.get('/admin/all-users', [authorizePermissions('admin'), getAllUsers]);
router.get('/admin/all-packages-admin', [
  authorizePermissions('admin'),
  getAllPackagesAdmin,
]);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
