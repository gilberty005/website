import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import pokemon1 from "./../../../assets/pokemon1.png"
import pokemon2 from "./../../../assets/pokemon2.png"
import pokemon3 from "./../../../assets/pokemon3.png"
import pokemon4 from "./../../../assets/pokemon4.png"
import pokemon5 from "./../../../assets/pokemon5.png"
import pokemon6 from "./../../../assets/pokemon6.png"
import "./carousel.css"; 

export function Pokemon() {
  return (
    <div>
        <div className="Carousel">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src={pokemon3} alt="SSP Craze" />
                    <p className="legend">At SSP, Kenna somehow pulled the alt art out of his first ETB, July 2022</p>
                </div>
                <div>
                    <img src={pokemon1} alt="The Post SSP Collection" />
                    <p className="legend">The newly furnished collection with the SSP award, July 2022</p>
                </div>
                <div>
                    <img src={pokemon4} alt="High School Movie Night" />
                    <p className="legend">Nothing good was pulled...Black Panther 2 was pretty good at least? November 2022</p>
                </div>
                <div>
                    <img src={pokemon2} alt="80 Packs for 18" />
                    <p className="legend">80+ packs at my 18th birthday party, May 2023</p>
                </div>
                <div>
                    <img src={pokemon6} alt="Japanese Pokemon Center" />
                    <p className="legend">Japan! Snorlax! Everything card related was sold out :(, August 2023</p>
                </div>
                <div>
                    <img src={pokemon5} alt="Poncho Pikachu" />
                    <p className="legend">First Collect-a-con, first poncho, craziness occured..., July 2023</p>
                </div>
            </Carousel>
        </div>
        <div className="Blog">
            <div className="gradient__text">
                <h1 className="title_blog">A Story Told Through Pokemon</h1>
            </div>
            <div className="blog_content">
                <p> 170. That was the threshold. Or at least, that was the threshold a decade ago, a threshold that knows no decline. Perhaps it’s 300 now. It doesn’t really matter. It’s just a marker of the “coolness” of a card. To the elementary kids discreetly trading in the shadows of the playground, I would have been considered one of the richest people alive. Overflowing with thousands of high hit point cards, my drawers now sit forlornly in the corner of my room—drawers that any overly enthusiastic kid would have once dreamt of having. But the cards most important to me aren’t the ones with the highest hit points. </p>  
                <br /> 
                <p> I have always been a collector of Pokémon cards. Long after all my peers gave up their collections in junior high, I still persist in the endavour.  For the longest time, I too didn’t know why exactly I collected Pokémon cards. What purpose could there possibly be in getting overpriced pieces of cardboard? Over the years, however, I’ve come to realize that it isn’t about the card itself, but rather it’s about what it represents. It is a joy to have cards worth hundreds, and even thousands of dollars, but they are not the Carbink among the Geodudes. Rather, it is some of the most mundane cards that prove to be the most valuable to me. </p>              
                <br /> 
                <p> The Bidoof Ditto from that chase through the streets of Boulder during the Summer Science Program. The Psyduck from my 14th birthday party at the Detective Pikachu premiere. The Lunala that marked victory at the 2017 Calgary Table Tennis Team Open Competition. A Pokémon card may simply be a drawing of a character with a few stats, but it carries far more than that. It’s a house of memories—a personal museum that bridges the imaginative world of Pokémon with my real-world experiences. Where others collect photographs, souvenirs, or stamps, I collect little pieces of cardboard. </p>
            </div>
        </div>
    </div>
    
  );
}

export default Pokemon;