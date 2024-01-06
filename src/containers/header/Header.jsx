import React from 'react';
import './header.css'; 
import Typed from 'typed.js';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { useEffect, useRef } from "react";

const TypingText = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['I am Gilbert.', 'I am a student.', 'I am a programmer.', "I am a writer."], 
        typeSpeed: 50, 
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div>
        <span ref={el} />
      </div>
    );
  };

const Header = () => (
    <div className="gilbert__header section__padding">
      <div className="gilbert__header-content">
        <h1 className="gradient__text">Hello!</h1>
          <h1 className="gradient__text">
              <TypingText />
          </h1>
        <p className='subtext'>Welcome to my website, a collection of my projects, adventures, and thoughts as I navigate the journey that is life</p>
        <div className="gilbert__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Let's connect</button>
        </div>
      </div>
  
      <div className="gilbert__header-image">
        <img src={ai} />
      </div>
    </div>
  );

export default Header; 