import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    locations?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTine: Date;
    endDateTine: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: { _id: string, name: string};
    organizer: { _id: string, firstName: string, lastName: string};
}


const EventSchema = new Schema({
    tittle: { type: String, required: true},
    description: { type: String },
    locations: { type: String},
    createdAt: { type: Date, default: Date.now},
    imageUrl: { type: String, required: true},
    startDateTine: { type: Date, default: Date.now},
    endDateTine: { type: Date, default: Date.now},
    price: { type: String},
    isFree: { type: Boolean, default: false},
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: { type: Schema.Types.ObjectId, ref: 'User'}
})

const Event = models.Event || model('Event', EventSchema)

export default Event