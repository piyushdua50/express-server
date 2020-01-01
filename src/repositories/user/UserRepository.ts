import * as mongoose from 'mongoose';
import { VersionableRepository } from './../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository extends VersionableRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    super(userModel);
  }

  public findOne(role, skip, limit) {
    return this.findUser(role, skip, limit);
  }

  public createUser(data): Promise<IUserModel> {
    console.log('Successfully Created');
    return this.create(data);
  }

  public deleteUser(data) {
    return this.delete(data);
  }

  public updateUser(data) {
    return this.update(data);
  }
}
