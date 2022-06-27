import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";
import "./simple-carousel.scss"

const SimpleCarousel = ({children,css,img,nav}) => {
  console.log({img})
  return (
	<div className={`simple-carousel ${css}`}>      
      <div class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          {img.map((item, i) => {
            return <li
              id={`carousel__slide${i+1}`}
                tabindex="0"
                class="carousel__slide" key={i}>
              <div class="carousel__snapper">
                {item}
              </div>
            </li>;
          })}
        </ol>
        {nav &&(
          <nav class="carousel__navigation">
            <ol class="carousel__navigation-list">          
              {img.map((item, i) => {
                return <li class="carousel__navigation-item">
                      <a href={`#carousel__slide${i+1}`}
                         class="carousel__navigation-button">Go to slide {i+1}</a>
                    </li>              
              })}          
            </ol>
          </nav>
        )}

        
      </div>
	</div>
  );
};

export default SimpleCarousel;
