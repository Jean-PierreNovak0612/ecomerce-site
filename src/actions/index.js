import products from '../api/fetchProducts';

import { FETCH_PRODUCT, REDUCE_AMOUNT } from './types';

export const fetchProducts = (link) => async (dispatch) => {
    const response = await products.get(link);

    dispatch({ type: FETCH_PRODUCT, payload: response.data })
}

export const reduceAmount = (id, link, amount) => async (dispatch) => {
    const url = `${link}/${id}`;
    const response = await product.patch(url, amount);

    dispatch({ type: REDUCE_AMOUNT, payload: response.data })
}