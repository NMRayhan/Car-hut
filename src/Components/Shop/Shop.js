import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [Cars, setCars] = useState([]);
    useEffect(() => {
        fetch("fakeDB.json")
            .then(response => response.json())
            .then(data => setCars(data))
    }, [])
    // console.log(Cars);
    return (
        <div className='row'>
            <div className='col-md-9 mt-5'>
                <div className='row'>
                    {
                        Cars.map(carDetails => <Product car={carDetails} key={carDetails.id} />)
                    }
                </div>
            </div>
            <div className='col-md-3 mt-5'>
                <h2>Cart Details</h2>
            </div>

        </div>
    );
};

export default Shop;