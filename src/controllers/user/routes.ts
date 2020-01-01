import * as express from 'express';
import validation from '../../controllers/trainee/validation';
import { authMiddleWare, validationHandler } from '../../libs/routes';
import { tokenRoutes } from '../../libs/routes';
import user from './Controller';
import LoginValidation from './LoginValidation';

const UserRouter: express.Router = express.Router();
UserRouter
  .get('/', authMiddleWare('TRAINEE1', 'read'), validationHandler(validation.get), user.get)
  .post('/', authMiddleWare('TRAINEE1', 'write'), validationHandler(validation.create), user.create)
  .post('/Login', validationHandler(LoginValidation.create), tokenRoutes(), user.createToken)
  .put('/', authMiddleWare('TRAINEE1', 'delete'), validationHandler(validation.update), user.put)
  .delete('/:originalId', authMiddleWare('TRAINEE1', 'delete'), validationHandler(validation.delete), user.delete);

export default UserRouter;
