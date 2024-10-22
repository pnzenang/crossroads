import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import 'colors';

//routers
import packageRouter from './4-routes/packageRouter.js';
import authRouter from './4-routes/authRouter.js';
import userRouter from './4-routes/userRouter.js';
//middleware
import errorHandlerMiddleware from './6-middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './6-middleware/authMiddleware.js';

const __direname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static(path.resolve(__direname, './1-crossroadsClient/dist')));

app.use(cookieParser());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

app.use('/api/v1/packages', authenticateUser, packageRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
  res.sendFile(
    path.resolve(__direname, './1-crossroadsClient/dist', 'index.html')
  );
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}...`.bgCyan.bold);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
