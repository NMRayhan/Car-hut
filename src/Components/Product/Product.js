import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = ({ car, handleAddToCart }) => {
    const { name, color, Price, model, Image } = car
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <div className='card'>
                <img src={Image} className="card-img-top" alt={model} />
                <div className='card-body'>
                    <h3 className='card-title text-center text-capitalize'>{name}</h3>
                    <h5 className='card-text fw-lighter'>Model : <span className='muted'>{model}</span></h5>
                    <h6 className='card-text fw-lighter'>Color : <span className="text-muted">{color}</span></h6>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 col-sm-12 price'>
                            <h6>Price : ${Price}M</h6>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <button onClick={() => handleAddToCart(car)} className='btn custome-btn' style={{color:"tomato"}}>Add <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;