import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    stars: {
        type: String,
        default: ''
    },
    images: {
        type: [],
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    latitude: {
        type: String,
        default: ''
    },
    longitude: {
        type: String,
        default: ''
    }
});

export default mongoose.model('Hotel', HotelSchema);