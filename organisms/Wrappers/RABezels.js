import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

import Card from "components/molecules/Card/Card.js";
import SelectorMenu from "components/molecules/SelectorMenu/SelectorMenu.js";


import imgBezels from "assets/bezels.png";
import imgNoBezels from "assets/no-bezels.png";

const RABezels = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { bezels } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure" bold="game bezels" />
          <Main>
            <p className="lead">
              You can use our preconfigured bezels to hide the vertical black
              vars on 8bit and 16bits games.
            </p>
          
            
            <SelectorMenu>
              <div className="selector-menu__img">
                <img src={imgBezels} className={bezels == false && "is-hidden"} alt="Background" />
                <img src={imgNoBezels} className={bezels == true && "is-hidden"} alt="Background" />
              </div>
              <div className="selector-menu__options">
                <ul>
                  <li onClick={() => onClick(true)}>
                  <Card css={bezels == true && "is-selected"}>
                    <span class="h3">On</span>
                    <p>Show Bezels</p>               
                  </Card>
                  </li>
                  <li onClick={() => onClick(false)}>
                  <Card css={bezels == false && "is-selected"}>
                    <span class="h3">Off</span>
                    <p>Hide Bezels</p>               
                  </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="aspect-ratio-sega"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default RABezels;
