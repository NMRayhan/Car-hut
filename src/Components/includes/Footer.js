import React from 'react';
import FAQ from './FAQ/FAQ';
import "./Footer.css";

const Questions = [
    { id: 1, name: "How React JS Work", Ans: "React Work Component base system, but similer in javascript Working flow. reactJS is one directional way data buinding System. only parent components to child component data passing but in rare case child components to parent component data passing. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. Returned React elements determine how the UI will look at the client end, Whene browser open in localhost or server react create Virtual DOM in own way for finding evenry rendering, if we change any elememts or data react compare this and changes happend. this react algorithm call diff algorithm" },
    { id: 2, name: "Props vs State Diffrent?", Ans: "Props in reactjs use data pass to component, props are equivalent to javascript pure functions, which are paramiter cannot be changed when we assign, we cannot change their values. State can be considered an instance of react component class and is majorly used to communicate with a component. The state of a react a component is an object that contains information that may or may not change over the lifecycle of a component. State object stores values of properties related to a component. React State are mutable and it's value changed as per requirement but Props are not mutable and it's value not changable. React state set by parent component but props set by eventhanler and completely changed by parent component, Both Props and states are used for storing data related to a component" }
]

const Footer = () => {
    return (
        <div className='footer-container py-4'>
            <div className="accordion" id='accordionExample'>
                <div className='accordion-item'>
                    <h2 className="accordion-header fw-bolder" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            FAQ about React JS
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {
                                Questions.map(quest => <FAQ Question={quest} key={quest.id} />)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;