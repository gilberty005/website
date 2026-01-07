import React from 'react';
import './header.css'; 
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
// import Voronoi from '../voronoi/voronoi'
import { Link } from 'react-router-dom';
import gilbert from '../../assets/photo.jpeg'

const TypingText = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['I\'m Gilbert.', 'I love exploring.', 'I love learning.', "I love writing."], 
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
          <p className='subtext welcome-text'>I'm a junior at Columbia University double majoring in Computer Science and Economics-Math. 
            While I'm currently work on experiential learning and interpretability, this website is a collection of my broader interests and projects :) 
          </p>
        <div className="gilbert__header-content__input">
          <Link to="/contact"><button type="button">Let's connect</button></Link>
        </div>
      </div>

      <div className="gilbert__header-image">
        {/* <Voronoi imageUrl={gilbert} /> */}
        <img src={gilbert} alt="Gilbert" />
      </div>
    </div>
  );

export default Header; 