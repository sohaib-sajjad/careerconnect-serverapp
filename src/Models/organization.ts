import mongoose, { Schema, Document } from 'mongoose';

interface IOrganization extends Document {
    name: string;
    email: string;
    address: string;
    bio: string;
}

const OrganizationSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    bio: { type: String, required: true }
});

const Organization = mongoose.model<IOrganization>('Organization', OrganizationSchema);

export default Organization;