import bikeFemale from '../../media/orpheo-lrt-w.jpg'
import bikeMale from '../../media/orpheo-lrt-m.jpg'
import bikeKids from '../../media/orpheo-k.jpg'
import helmetAdult from '../../media/caden-a.png'
import helmetYouth from '../../media/pocito-k.png'
import insurance from '../../media/insurance.jpg'

const initState = {
    products: [
        {
            id: 1,
            name: 'Adult Male Bike',
            price: 20.50,
            img: bikeMale,
            product_type: 'bike'
        },
        {
            id: 2,
            name: 'Adult Female Bike',
            price: 20.50,
            img: bikeFemale,
            product_type: 'bike'
        },
        {
            id: 3,
            name: 'Kids Unisex Bike',
            price: 12.75,
            img: bikeKids,
            product_type: 'bike'
        },
        {
            id: 4,
            name: 'Adult Unisex Helmet',
            price: 4.00,
            img: helmetAdult,
            product_type: 'accessory'
        },
        {
            id: 5,
            name: 'Kids Unisex Helmet',
            price: 3.50,
            img: helmetYouth,
            product_type: 'accessory'
        },
        {
            id: 6,
            name: 'Insurance',
            price: 9.99,
            img: insurance,
            product_type: 'addon'

        }
    ],
    addedItems: [],
    total: 0
}

const cartReducer = ( state = initState, action) => {
    return state;
}

export default cartReducer;