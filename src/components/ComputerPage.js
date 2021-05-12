import React, { useState } from 'react';

import ProductList from './ProductList';
import useProductList from '../hooks/useProductList'

const ComputerPage = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productList] = useProductList('computers');

    const renderProduct = () =>{
        if(!selectedProduct) return null;
    }
    
    return (
        <div className="pt-5 mt-4">
            {renderProduct()}
            <ProductList listProducts={productList} onProductSelect={setSelectedProduct} />
        </div>
    )
};

export default ComputerPage;