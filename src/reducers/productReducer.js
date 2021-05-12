import _ from 'lodash';

import { FETCH_PRODUCT, REDUCE_AMOUNT } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_PRODUCT:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case REDUCE_AMOUNT:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}