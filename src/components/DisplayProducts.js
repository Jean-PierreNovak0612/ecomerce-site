import React, { useState } from 'react';

import ProductList from './ProductList';
import useProductList from '../hooks/useProductList'
import ShowProductInfo from './ShowProductInfo';

const DisplayProducts = ({ term }) => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [bought, setBought ] = useState(false);
    const [productList] = useProductList(term);

    const classSuccess = bought ? 'd-block w-75 mx-auto alert alert-success text-center my-3' : 'd-none';

    const renderProduct = () =>{
        if(!selectedProduct) return null;
        return <ShowProductInfo selected={selectedProduct} onBought={setSelectedProduct} onSuccess={setBought} database={term} />
    }
    
    return (
        <div className="pt-5 mt-4">
            <div className={classSuccess}>Your purchase was successfully!</div>
            {renderProduct()}
            <ProductList listProducts={productList} onProductSelect={setSelectedProduct} selected={selectedProduct} />
        </div>
    )
};

export default DisplayProducts;