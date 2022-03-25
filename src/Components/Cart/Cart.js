import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt, faRandom } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Cart.css";

const Cart = () => {
    return (
        <div className='card overflow-hidden'>
            <div className='card-header'>
                <h4 className='text-center text-primary'>Order Summary</h4>
            </div>
            <div className='card-body'>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
            <div className='card-footer text-center row'>
                <button className='btn btn-success col-12'>Random for Me <FontAwesomeIcon icon={faRandom} /></button>
                <button className='btn btn-danger col-12 mt-2'>Try again <FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default Cart;