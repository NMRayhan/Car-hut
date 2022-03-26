import React from 'react';
import FAQ from './FAQ/FAQ';
import "./Footer.css";

const Questions = [
    { id: 1, name: "How React JS Work", Ans: "React Work Component base system, but similer in javascript Working flow. reactJS is one directional way data buinding System. only parent components to child component data passing but in rare case child components to parent component data passing. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. Returned React elements determine how the UI will look at the client end, Whene browser open in localhost or server react create Virtual DOM in own way for finding evenry rendering, if we change any elememts or data react compare this and changes happend. this react algorithm call diff algorithm" },
    { id: 2, name: "Props vs State Diffrent?", Ans: "Props vs State Diffrent Ans" },
    { id: 3, name: "How useState Work?", Ans: "How useState Work Ans" }
]

const Footer = () => {
    return (
        <div className='footer-container'>
            {
                Questions.map(quest => <FAQ Question={quest} key={quest.id} />)
            }
        </div>
    );
};

export default Footer;