import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (module, permissionType) => (req, res, next) => {
  const repository = new UserRepository();
  const token = req.header('Authorization');
  const Key = process.env.Key;
  const user = jwt.verify(token, Key);
  if (!user) {
    next({
      message: 'Unauthorized Access' || 'Error Occurred',
      status: 403,
    });
  } else {
    repository.find({ _id: user._id }).then((data) => {
      const role = data.role;
      if (!hasPermission(module, role, permissionType)) {
        next({ message: 'Permission is not allowed', status: 403 });
      } else {
        next();
      }
    });
  }
};
