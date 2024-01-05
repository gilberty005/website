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
        strings: ['I am Gilbert.', 'I am a student.', 'I am an aspiring programmer.'], 
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
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Hello!</h1>
        <h1 className="gradient__text">
            <TypingText />
        </h1>
        <p>Welcome to my website, a collection of my projects, adventures, and thoughts as I navigate the journey that is life</p>
  
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Contact me</button>
        </div>
  
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
  
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );

export default Header; 