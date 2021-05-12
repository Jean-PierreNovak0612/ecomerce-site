import React from 'react';

import '../css/ProductList.css';

const ProductList = ({ listProducts, onProductSelect, selected}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const onClick = (prod) => {
        onProductSelect(prod);

        scrollToTop();
    }

    const renderButton = (prod) => {
        if(!prod.amount) return <button onClick={() => onClick(prod)} className="btn btn-danger">Check it out</button>
        return <button onClick={() => onClick(prod)} className="btn btn-success">Check it out </button>
    }

    const renderAvailable = (amount) => {
        if(amount === 0) return <span className="text-danger ms-3">Currently not available</span>
        return <span className="text-success ms-3">Avaliable</span>
    }

    const renderContent = () => {
        if(!listProducts) return <div>Loading...</div>

        return listProducts.map(product => {
            const imgUrl = process.env.PUBLIC_URL + product.image;
            if(selected){
                if(selected.id === product.id) return null;
            }
            return (
                <div className={`cardWidth cardHeight card text-start d-md-inline-block mx-md-3 my-3 mx-auto`} key={product.id}>
                    <img src={imgUrl} alt="computer" className="card-img-top img-height"></img>
                    <div className="card-body">
                        <h5>{product.title}</h5>
                        <p>Available: {renderAvailable(product.amount)}</p>
                        <p>Amount: {product.amount}</p>
                        <p>Price: ${product.price}</p>
                        {renderButton(product)}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="text-center mt-5 mt-sm-0">
            {renderContent()}
        </div>
    )
}

export default ProductList;