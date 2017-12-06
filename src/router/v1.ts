import * as express from 'express';
import {
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
} from '../controllers/HotelsController';

export default (app) => {
    // General Routes
    const apiRoutes = express.Router();

    //Particular Route
    const hotelRoutes = express.Router();

    /**
     * HOTELS ROUTES
     */

    apiRoutes.use('/hotels', hotelRoutes);

    hotelRoutes.get('/', getAllHotels);
    hotelRoutes.get('/:id', getHotelById);
    hotelRoutes.post('/', createHotel);
    hotelRoutes.put('/:id', updateHotel);
    hotelRoutes.delete('/:id', deleteHotel);

    app.use('/api', apiRoutes);
};