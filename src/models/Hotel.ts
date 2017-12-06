import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        default: '',
        //required: true
    },
    stars: {
        type: String,
        default: '',
        //required: true
    },
    images: {
        type: [],
        default: '',
        //required: true
    },
    price: {
        type: String,
        default: '',
        //required: true
    }    
});

export default mongoose.model('Hotel', HotelSchema);