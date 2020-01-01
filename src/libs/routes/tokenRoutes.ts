import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IUserModel } from 'src/repositories/user/IUserModel';
import UserRepository from './../../repositories/user/UserRepository';

const userRepo = new UserRepository();
export default function tokenRoutes() {
  return (req, res , next) => {
    const { Emailid, Password } = req.body;
    userRepo.find({ email: Emailid }).then((result: IUserModel) => {
      if (!result) {
        next({
          error: 'Invalid Email',
          message: 'Unauthorized Access',
          status: 401,
        });
      }
      const { password } = result;
      if (bcrypt.compareSync(Password, password)) {
        const token = jwt.sign({ result, exp: Math.floor(Date.now() / 1000) + 900 }, process.env.Key);
        req.body.token = token;
        next();
      }
      else {
        next({
          error: 'Wrong Password',
          message: 'Unauthorized Access',
          status: 401,
        });
      }
    })
    .catch((err) => {
      next({
        error: 'User not found',
        message: 'Unauthorized Access',
        status: 404,
      });
    });
  };
}
