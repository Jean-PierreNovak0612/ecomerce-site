import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductList = (term) => {

    const [products, setProducts ] = useState([]);

    useEffect(() => {
        fetch(term);
    }, [term]);

    const fetch = async (toFetch) => {
        const response = await axios.get(`https://my-json-server.typicode.com/jean-pierrenovak0612/ecomerce-server/${toFetch}`);

        setProducts(response.data)
    };

    return [products];
}

export default useProductList;