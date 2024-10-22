import { Router } from 'express';
import {
  forgotPassword,
  login,
  logout,
  register,
  resetPassword,
} from '../3-controllers/authController.js';
const router = Router();

import {
  validateRegisterInput,
  validateLoginInput,
} from '../6-middleware/validationMiddleware.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);
router.get('/logout', logout);

export default router;
