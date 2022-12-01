import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollButton.scss';

const ScrollButton = () =>{

     const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <button className='scroll-button'>
            <FaArrowCircleUp onClick={scrollToTop}/>
        </button>
    );
}

export default ScrollButton;