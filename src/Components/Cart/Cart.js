/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faRandom, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Cart.css";

const Cart = ({ cartData, handleChoiceAgain,handRandomProduct }) => {
    return (
        <div className='card overflow-hidden cart'>
            <div className='card-header'>
                <h4 className='text-center text-primary'>Order Summary</h4>
            </div>
            <div className='card-body'>
                {
                    cartData.map(car => {
                        return <div>
                            <div className='row justify-content-space-between align-items-center'>
                                <div className='col-3'>
                                    <img src={car.Image} className="w-100 rounded-circle" alt={car.name} />
                                </div>
                                <div className='col-7'>
                                    <p className='text-center text-capitalize'>{car.name}</p>
                                </div>
                                <div className='col-2'>
                                    <a href='#'><FontAwesomeIcon icon={faTrashArrowUp} className="text-secondary  rounded-circle" /> </a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='card-footer text-center row'>
                <button onClick={() => handRandomProduct()} className='btn btn-success col-12'>Random for Me <FontAwesomeIcon icon={faRandom} /></button>
                <button onClick={() => handleChoiceAgain()} className='btn btn-danger col-12 mt-2'>Choice Again <FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default Cart;