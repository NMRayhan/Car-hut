import React from 'react';
import "./FAQ.css";

const FAQ = (props) => {
    const { name, Ans, id } = props.Question;
    return (
        <div classNameName='Question-container'>
            <div className='Questions'>
                <div className='py-2'>
                    <div className='border design row align-items-center justify-content-center'>
                        <div className='col-md-5'>
                            <h2 className='text-secondary'>Question: <span className='text-primary'>{name}</span> </h2>
                        </div>
                        <div className='col-md-7'>
                            <p className='text-secondary'>Ansower: <span className='text-info'>{Ans}</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;