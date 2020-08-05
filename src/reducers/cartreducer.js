import { ADD_TO_CART } from '../actions/types';

const cartdata = {
    cartDetail: []
}

export const cartReducer = (state = cartdata, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                cartDetail:[...state.cartDetail,action.payload]
            };

        default:
            console.log(state)
            return state;
    }
}

