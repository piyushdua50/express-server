import * as mongoose from 'mongoose';
export interface IVersionableDocument extends mongoose.Document {
    createdBy: Date;
    deletedAt: Date;
    originalId: string;
    password: string;
}
