import { ADD_TO_CART, Buy_Checkout } from '../actions/types';

const cartdata = {
    cartDetail: [],
    itemsdata :[]
}

export const cartReducer = (state = cartdata, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                cartDetail: [...state.cartDetail, action.payload]
            };
        case Buy_Checkout:
            return {
                itemsdata: [...state.itemsdata, action.payload]
            };

        default:
            console.log(state)
            return state;
    }
}

