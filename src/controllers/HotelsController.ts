import Hotel from '../models/Hotel';

export function getAllHotels(request, response, next) {
    Hotel.find((error, hotels) => {
        if(error){
            response.status(500).json({ error });
        }

        response.status(200).json({ hotels });
    });
}

export function getHotelById(request, response, next) {
    let id = request.params.id;

    Hotel.findById(id, (error, hotel) => {
        if (error) {
            response.status(500).json({ error });
        }

        response.status(200).json({ hotel });
    });
}

export function createHotel(request, response, next) {    
    let name = request.body.name;
    let stars = request.body.stars;
    let images = request.body.images;
    let price = request.body.price;

    // if(!name || !stars || !price){
    //     response.status(422).json({ error: 'Hay campos obligatorios sin llenar.' });
    //     return;
    // }

    let hotel = new Hotel({
        name,
        stars,
        images,
        price
    });

    hotel.save((error, hotel) => {
        if (error) {
            response.status(500).json({ error });
        }

        response.status(200).json({ hotel });
    });
}

export function updateHotel(request, response, next) {
    let id = request.params.id;

    Hotel.findByIdAndUpdate(id, request.body, (error, hotel) => {
        if (error) {
            response.status(500).json({ error });
        }

        response.status(200).json({ hotel });
    });
}

export function deleteHotel(request, response, next) {
    let id = request.params.id;

    Hotel.findByIdAndRemove(id, (error, hotel) => {
        if (error) {
            response.status(500).json({ error });
        }

        response.status(200).json({ hotel });
    });
}
