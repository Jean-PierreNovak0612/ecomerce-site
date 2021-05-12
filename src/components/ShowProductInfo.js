import React, { useState, useEffect } from 'react';
import axios from 'axios'

import '../css/ShowProductInfo.css'

const ShowProductInfo = ({ selected, database }) => {

    const [totalAmountOfProductsToBuy, setTotalAmountOfProductsToBuy] = useState();
    const [decrease, setDecrease] = useState(true);
    const [increase, setIncrease] = useState(false);
    const [total, setTotal] = useState();

    const classDecrease = decrease ? 'btn-light' : 'btn-success';    
    const classIncrease = increase ? 'btn-light' : 'btn-success';    
    const classBuyButton = selected.amount === 0 || totalAmountOfProductsToBuy === 0 ? 'btn-light' : 'btn-success';

    useEffect(() => {
        setTotalAmountOfProductsToBuy(selected.amount ? 1 : 0);
    }, [selected])

    useEffect(() => {
        setIncrease(totalAmountOfProductsToBuy === selected.amount);
        setDecrease(totalAmountOfProductsToBuy === 0)
        setTotal((totalAmountOfProductsToBuy * parseFloat(selected.price)).toFixed(2))
    }, [totalAmountOfProductsToBuy])

    const buyingProduct = async (id, server) => {
        const response = await axios.patch(`https://my-json-server.typicode.com/jean-pierrenovak0612/ecomerce-server/${server}/${id}`, { amount: (selected.amount - totalAmountOfProductsToBuy)})

        console.log(response.data)
    }

    const increaseAmount = () => {
        setTotalAmountOfProductsToBuy(totalAmountOfProductsToBuy + 1);
    }

    const decreaseAmount = () => {
        setTotalAmountOfProductsToBuy(totalAmountOfProductsToBuy - 1);
    }

    const renderListItem = (item = null, description) => {
        if(!item) return null;
        return <li>{description}: {item}</li>
    }

    const renderSpecs = (specifications) => {
        return (
            <ul className="ms-2 ms-sm-5 mt-3">
                {renderListItem(specifications.cpu, 'CPU')}
                {renderListItem(specifications.graphic, 'GPU')}
                {renderListItem(specifications.ram, 'RAM')}
                {renderListItem(specifications.storage, 'Storage')}
                {renderListItem(specifications.display, 'Display')}
                {renderListItem(specifications.dimensions, 'Dimensions')}
            </ul>
        )
    }

    const renderAvailable = (amount) => {
        if(amount === 0) return <span className="text-danger">Currently not available</span>
        return <span className="text-success">Available</span>
    }

    return (
        <div className="data-width card mx-auto text-center d-block my-3 px-2 px-sm-5">
            <img src={process.env.PUBLIC_URL + selected.image} className="card-img-top img-width"></img>
            <div className="card-body">
                <h3>{selected.title}</h3>
                <div className="w-100 mt-5 text-start">
                    <h5>Avaliable: {renderAvailable(selected.amount)}</h5>
                    <h5>Price: ${selected.price}</h5>
                    <h5>Secifications: {renderSpecs(selected.specs)}</h5>
                    <h5>Avaliable amount: {selected.amount}</h5>
                    <h5>Total amount:
                        <div className="d-md-inline ms-md-5">
                            <button className={`btn fw-bolder fs-3 px-3 ${classDecrease}`} disabled={decrease} onClick={decreaseAmount}> - </button>
                            <div className="amount d-inline-block px-3 px-md-5">{totalAmountOfProductsToBuy}</div>
                            <button className={`btn fw-bolder fs-3  ${classIncrease}`} disabled={increase} onClick={increaseAmount}> + </button>
                        </div>
                    </h5>
                    <h5>Total price:&nbsp;&nbsp; ${total}</h5>
                </div>
                <button disabled={selected.amount === 0 || totalAmountOfProductsToBuy === 0} className={`btn ${classBuyButton} px-5`} onClick={() => buyingProduct(selected.id, database)}>Buy</button>
            </div>
        </div>
    )
}

export default ShowProductInfo;