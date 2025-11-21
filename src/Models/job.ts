import mongoose, { Document, Schema } from 'mongoose';

export interface IJob extends Document {
    title: string;
    description: string;
    organizationId: mongoose.Types.ObjectId;
    applicants: mongoose.Types.ObjectId[];
}

const JobSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organizationId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Organization',
    },
    applicants: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }]
}, {
    timestamps: true,
});

const Job = mongoose.model<IJob>('Job', JobSchema);

export default Job;