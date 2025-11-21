import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    title: string;
    bio: string;
    jobsApplied: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    jobsApplied: [{
        type: mongoose.Types.ObjectId,
        ref: 'Job',
    }]
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;