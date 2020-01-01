import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import { UserRouter } from './controllers/user';
const route: Router = Router();
route.use('/trainee', traineeRouter);
route.use('/user', UserRouter);

export default route;
