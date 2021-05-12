import React, { useState } from 'react';

import ProductList from './ProductList';
import useProductList from '../hooks/useProductList'
import ShowProductInfo from './ShowProductInfo';

const DisplayProducts = ({ term }) => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productList] = useProductList(term);

    const renderProduct = () =>{
        if(!selectedProduct) return null;
        return <ShowProductInfo selected={selectedProduct} database={term} />
    }
    
    return (
        <div className="pt-5 mt-4">
            {renderProduct()}
            <ProductList listProducts={productList} onProductSelect={setSelectedProduct} selected={selectedProduct} />
        </div>
    )
};

export default DisplayProducts;