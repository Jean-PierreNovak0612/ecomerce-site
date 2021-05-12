import React, { useState } from 'react';

import ProductList from './ProductList';
import useProductList from '../hooks/useProductList'

const ComputerPage = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productList, fetch] = useProductList('computers');

    return (
        <div className="pt-5 mt-4">
            <ProductList listProducts={productList} onProductSelect={setSelectedProduct} />
        </div>
    )
};

export default ComputerPage;