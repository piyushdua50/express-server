import { IVersionableDocument } from '../versionable/IVersionableModel';
export interface IUserModel extends IVersionableDocument {
  name: string;
  _id: string;
  role: string;
  email: string;
}
