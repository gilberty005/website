import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import './frosci.css';
import frosci from '../../assets/frosci.png'
import google from '../../assets/google.png'
import { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';

const FactInputArea = () => {
    const [facts, setFacts] = useState({ storage1: '', storage2: '', storage3: '' });
    const [charCounts, setCharCounts] = useState({ count1: 0, count2: 0, count3: 0 });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      const newFacts = { ...facts, [name]: value };
  
      // Update character counts while checking the limit
      if (value.length > 3000) {
        alert('Fact cannot exceed 3000 characters.');
        return;
      }
  
      setFacts(newFacts);
      setCharCounts({ ...charCounts, [`count${name.slice(-1)}`]: value.length });
    };
  
    const handleSubmit = () => {
        setFacts({ storage1: '', storage2: '', storage3: '' }); // Clear the text areas
        alert("Your responses have been deleted. You can now scroll on");
      };
    
    return (
      <div className="input-areas">
        <textarea
          name="storage1"
          cols="30"
          rows="10"
          value={facts.storage1}
          onChange={handleChange}
          placeholder="Type to store on local"
          className="fact-input"
        />
        <div style={{ textAlign: 'right', color: 'grey' }}>{charCounts.count1}/3000</div>
  
        <textarea
          name="storage2"
          cols="30"
          rows="10"
          value={facts.storage2}
          onChange={handleChange}
          placeholder="Type to store on Google Cloud"
          className="fact-input"
        />
        <div style={{ textAlign: 'right', color: 'grey' }}>{charCounts.count2}/3000</div>
  
        <textarea
          name="storage3"
          cols="30"
          rows="10"
          value={facts.storage3}
          onChange={handleChange}
          placeholder="Type to store on AWS"
          className="fact-input"
        />
        <div style={{ textAlign: 'right', color: 'grey' }}>{charCounts.count3}/3000</div>
        <input type="submit" className="submit focus-style" value="Submit" onClick={handleSubmit} style={{ display: "block", margin: "0 auto" }} />
      </div>
    );
  };
  
const TypingText = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
        'Are dinosaurs extinct?', 
        'Was Moby Dick written by Herman Melville?', 
        'Is the formula for water H20?',
        'Is the formula for water H20?',
        'Is a stop sign red in color?',
        'Are there 24 hours in a day?',
        'Is the current president of the United States Ronald Reagan?',
        'Does 8 plus 8 equal 16?',
        'Was John F. Kennedy assassinated in 1994?',
        'Is oxygen a metal?',
        'Are there 15 months in a year?',
        'Is ketchup made with tomatoes?',
        'Does 5 plus 7 equal 30?',
        'Was Romeo and Juliet written by William Shakespeare?',
        'Do all countries have at least two colors in their flags?',
        'Was Cat in the Hat written by J.D. Salinger?',
        'Does a triangle have 3 sides?'],
        typeSpeed: 15, 
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

  const TypingText_2 = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
            'Does Denmark contain more square miles than Costa Rica?',
            'Did Benjamin Franklin give piano lessons?',
            'Does an Italian deck of card contain jacks?',
            'Did Alfred Hitchcock eat meat?',
            'Are more babies conceived in February than in any other month?',
            'Do all countries have at least two colors in their flags?',
            'Was Czar Nicholas II executed in 1917?',
            'Is Krypton’s atomic number 26?',
            'Is the average age of a human eyelash 150 days?',
            'Was Pompey defeated by Julius Caesar in 48 B.C.?',
            'Were family names first used in Roman times?',
            'Is myrmecophobia fear of ants?',
            'Is Jones the most common name in America?',
            'Do insects feel hunger?',
            'Was Pepin king of the Franks from 482 to 511 A.D.?',
            'Is a quince a fruit?'],
        typeSpeed: 15, 
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

  const TypingText_3 = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
            'Saddam Hussein has been executed.',
            'The Tsunami disaster in Asia occurred in December 2004.',
            'A cow produces nearly 200,000 glasses of milk in her lifetime.',
            'Bluebirds cannot see the color blue.',
            'Michael Jackson was acquitted of molestation charges.',
            'Only two countries border three oceans, the United States and Canada.',
            'There was a terrorist bombing in the subways of London in July 2005.',
            'There have been 43 presidents of the United States.',
            'Ingrown toenails are hereditary.',
            'ABC news anchor Peter Jennings was a high school dropout from Canada.',
            'Pope Benedict XVI deserted the German Army during World War II.',
            'The highest point in Pennsylvania is lower than the lowest point in Colorado.',
            'Europe is the only continent without a desert.',
            'The collapse of the Larsen B ice shelf in Antarctica began in January 2002.',
            'The space shuttle Columbia disintegrated during re-entry over Texas in Feb 2003.',
            'The international telephone dialing code for Antarctica is 672.',
            'A quarter has 119 grooves around the edge.',
            'Rubber bands last longer when refrigerated.',
            'French Fries are originally from Belgium, not France.',
            'Al Capone’s business card said he was a used furniture dealer.',
            'Without glasses, John Lennon was legally blind all of his life.',
            'The Atlantic Ocean is saltier than the Pacific Ocean.',
            'The Dominican Republic has the only national flag with a bible in it.',
            'The Live 8 concerts took place in the G8 nations and South Africa in July 2005.',
            'The NATO bombing of Yugoslavia began in March 1999.',
            'In Chinese script, there are more than 40,000 characters.',
            'A person burns more calories when sleeping than when watching television.',
            'Babe Ruth earned the nickname The Sultan of Swat for his home run hitting ability.',
            'The Himalayan mountains continue to grow due to the collision of tectonic plates.',
            'The great Pyramids of Giza are the only one of the Seven Wonders of the Ancient World that still exists.',
            'North Korea announced that it had conducted a successful nuclear test in Oct 2006.',
            'Chechen separatists in Southern Russia took a school hostage in Sept 2004.',
            'The longest classical composition would take 639 years to perform.',
            'A person will shed over 40 pounds of skin in their lifetime.',
            'Peanuts are one of the ingredients of dynamite.',           
        ],
        typeSpeed: 25, 
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
        <div className="typing-container">
          <span ref={el} className="typing-text" />
        </div>
    );
  };


  const TypingText_4 = () => {
    const el = useRef(() => {

    });
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
            'Has Saddam Hussein been executed?',
            'When did the Tsunami disaster in Asia occur?',
            'How many glasses of milk does a cow produce in her lifetime?',
            'Can bluebirds see the color blue?',
            'Was Michael Jackson acquitted of molestation charges?',
            'Which two countries border three oceans?',
            'When was there a terrorist bombing in the subways of London?',
            'How many presidents has the United States had?',
            'Are ingrown toenails hereditary?',
            'Was ABC news anchor Peter Jennings a high school dropout from Canada?',
            'Did Pope Benedict XVI desert the German Army during World War II?',
            'Is the highest point in Pennsylvania lower than the lowest point in Colorado?',
            'Is Europe the only continent without a desert?',
            'When did the collapse of the Larsen B ice shelf in Antarctica begin?',
            'When did the space shuttle Columbia disintegrate during re-entry over Texas?',
            'What is the international telephone dialing code for Antarctica?',
            'How many grooves does a quarter have around the edge?',
            'Do rubber bands last longer when refrigerated?',
            'Where are French Fries originally from?',
            'What did Al Capone’s business card say his profession was?',
            'Was John Lennon legally blind all of his life?',
            'Is the Atlantic Ocean saltier than the Pacific Ocean?',
            'Which is the only national flag that contains a bible?',
            'When and where did the Live 8 concerts take place?',
            'When did the NATO bombing of Yugoslavia begin?',
            'How many characters are there in Chinese script?',
            'Does a person burn more calories when sleeping or watching television?',
            'Why was Babe Ruth nicknamed The Sultan of Swat?',
            'Why do the Himalayan mountains continue to grow?',
            'Which is the only one of the Seven Wonders of the Ancient World that still exists?',
            'When did North Korea announce it had conducted a successful nuclear test?',
            'What event involving Chechen separatists occurred in Southern Russia in Sept 2004?',
            'How long would the longest classical composition take to perform?',
            'How much skin does a person shed in their lifetime?',
            'Is one of the ingredients of dynamite peanuts?',
            ],
        typeSpeed: 15, 
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

export function Frosci() {
    return (
        <div className="App">
            <div className="middle">
                <div className = "gradient__text">
                    <h1 className="lithum_title">The Google Effect: Digital Information & Memory</h1>
                </div>
                <div>
                    <h2 className="title_description">
                    In today’s digital age, the Internet, in particular search engines such as Google, are ubiquitous. The result of such prevalence, however, has transformed the very way we store and recall information. Explore 4 experiments that showcase just how changed our minds have become.
                    </h2>
                </div>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">You will see a series of questions typed very quickly. Try to answer in your mind as many as you can!</h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text"><TypingText /></h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">Easy right? How about this next set?</h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text"><TypingText_2 /></h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">A lot harder right? Be honest, did you Google any of them or feel the inclination to Google? </h1>
                <h2 className="title_description">When this was tested on an audience of 46 college students (coincidently also Columbia students), their reactions highlighted a key trend: those faced with harder questions showed a increased delay in response times from 591 ms to 712 ms, with the students citing a compulsion to turn to Google for answers. </h2>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">Alright, let's try something a little different. </h1>
                <h2 className="title_description"> You will see 3 text boxes, each labelled with a different storage ID. You will see a list of facts flash on the top of your screen. As the facts appear, pick a text box and type them in. Make sure each text box at least has one fact in it. There's no need to type in all the facts that appear, just do a few. :) Finally, click submit at the very end.</h2>
            </div>
            <div className="middle_2">
                <h1 className="gradient__text"><TypingText_3 /></h1>
                <FactInputArea />
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">Oops! It seems like all your answers got deleted.</h1>
                <h1 className = "gradient__text">Sorry! Anyways, I have a few more trival questions for you, care to try?</h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text"><TypingText_4 /></h1>
            </div>
            <div className="middle_2">
                <h1 className = "gradient__text">Recall anything? Or perhaps, do you recall which storage box you placed the fact in?</h1>
                <h2 className="title_description">It turns out that among a group of 32 college students who were asked to perform the same task, in a more rigorous study, there was a statistically sigificant difference between the percentage of students who recalled the fact verus the percertange of students who recalled where they stored the fact.</h2>
                <div className="frosci-image-container">
                  <img src={frosci} alt="Frosci Image" className="frosci-image" />
                </div>
            </div >
            <div className="middle_2">
                <h1 className = "gradient__text">Analysis and Conclusions</h1>
                <h2 className="title_description">The research on the Google effect from Betsy Sparrow, Jenny Liu and Daniel M. Wegner highlights the Google effect: our instinct to not delve deeper into our own knowledge banks, but to rather turn to online searchs for quick answers. This reflects a shift from internal memory strategies towards an external, technology-based transactive memory system. Search engines are not mere tools of convenience; they have fundamentally changed how we encode and retrieve information.</h2>
                <div className="frosci-image-container">
                    <img src={google} alt="Frosci Image" className="google" />
                </div>
            </div>
        </div>
    );
}
