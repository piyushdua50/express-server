import { Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
  public static getInstance(instance: UserController) {
    if (!instance) {
      instance = new UserController();
    }
    return instance;
  }

  public repository = new UserRepository();

  public async get(req: Request , res: Response) {
    console.log('Inside get method');
    const user = new UserRepository();
    const role = { role: 'trainee' };
    const { skip = 0, limit = 10 } = req.query;
    const records = await user.findOne(role, skip, limit);
    const TotalRecords = await user.count();
    const newData = [{ TotalRecords, records }];
    console.log(newData);
    res
      .status(200)
      .send(successHandler('OK', 'Successfully Fetch User', newData));
  }

  public async create(req: Request, res: Response) {
    console.log('Inside create method');
    const user = new UserRepository();
    const data = await user.createUser(req.body);
    res
      .status(200)
      .send(successHandler('OK', 'Successfully Created User', data));
  }

  public async put(req: Request, res: Response) {
    console.log('Inside put method');
    const user = new UserRepository();
    const { id, dataToUpdate } = req.body;
    const originalId = id;
    const name = dataToUpdate.name;
    const result = await user.updateUser({ name, originalId });
    res
      .status(200)
      .send(successHandler('OK', 'Successfully Updated User', `${name} is the new updated value`));
  }

  public async delete(req: Request, res: Response) {
    console.log('Inside delete method');
    const user = new UserRepository();
    const result = await user.deleteUser(req.params);
    res
      .status(200)
      .send(successHandler('OK', 'Successfully Deleted User', 'Id is deleted'));
  }

  public async createToken(req: Request, res: Response, next) {
    const token = req.body.token;
    res.status(200).send(successHandler('Ok', 'Token generated', token));
  }
}

export default UserController.getInstance(new UserController());
