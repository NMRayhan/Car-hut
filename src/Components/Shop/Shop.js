import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [Cars, setCars] = useState([]);
    const [Carts, setCarts] = useState([])


    useEffect(() => {
        fetch("fakeDB.json")
            .then(response => response.json())
            .then(data => setCars(data))
    }, []);



    const handleAddToCart = (product) => {
        if (Carts.length < 4) {
            setCarts([...Carts, product]);
        } else {
            alert('You cannot add more then 4 product at a time')
        }
    }

    const handleChoiceAgain = () => {
        setCarts([]);
    }

    const handRandomProduct = () =>{
        const randomChoice = Carts[Math.floor(Math.random()*Carts.length)];
        setCarts([randomChoice]);
    }

    return (
        <div className='row shop'>
            <div className='col-md-9 mt-2'>
                <div className='row'>
                    {
                        Cars.map(carDetails => <Product car={carDetails} key={carDetails.id} handleAddToCart={handleAddToCart} />)
                    }
                </div>
            </div>
            <div className='col-md-3 mt-5'>
                <Cart cartData={Carts} key={Carts.id} handleChoiceAgain={handleChoiceAgain} handRandomProduct={handRandomProduct} />
            </div>
        </div>
    );
};

export default Shop;