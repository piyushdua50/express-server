import * as mongoose from 'mongoose';

export class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model: M;
  constructor(model) {
    this.model = model;
  }

  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public async create(data): Promise<D> {
    const id = this.generateObjectId();
    const newData = { ...data, _id: id, originalId: id };
    return await this.model.create(newData);
  }

  public async delete(data) {
    const founddata = await this.find({ originalId: data.originalId, deletedAt: { $exists: false } }).lean();
    this.model.updateOne({ _id: founddata._id }, { $set: { deletedAt: Date.now() } }, (err) => {
      if (err) {
        console.log('Error in Deletion');
      }
    });
    return (founddata);
  }

  public count() {
    return this.model.countDocuments();
  }

  public async update(data) {
    const data1 = await this.find({ originalId: data.originalId, deletedAt: { $exists: false } }).lean();
    const result = await this.create(Object.assign(data1, { name: data.name }));
    this.model.updateOne({ _id: result._id }, { originalId: data.originalId, createdAt: Date.now() }, (err) => {
      if (err) {
        console.log('error');
      }
      else {
        console.log('Successfully updated');
      }
    });
    this.model.updateOne({ _id: data1._id }, { $set: { deletedAt: Date.now() } }, { upsert: true }).then((err) => {
      console.log(err);
    });
    return (data1);
  }

  public find(data) {
    return this.model.findOne(data);
  }

  public findUser(role, skip, limit) {
    return this.model.find(role, undefined, { skip: +(skip), limit: +(limit) }, (err) => {
      if (err) {
        console.log('Error in fetching the users');
      }
    });
  }
}
