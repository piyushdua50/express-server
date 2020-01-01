import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(options: any, collections: any) {
    const versionable = Object.assign(
      {
        createdAt: {
          default: Date.now,
          required: true,
          type: Date,
        },
        deletedAt: {
          required: false,
          type: Date,
        },
        originalId: {
          required: true,
          type: String,
        },
        password: {
          required: false,
          type: String,
        },
      }, options);
    super(versionable, collections);
  }
}
