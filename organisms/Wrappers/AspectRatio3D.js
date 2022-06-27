import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

import Card from "components/molecules/Card/Card.js";
import SelectorMenu from "components/molecules/SelectorMenu/SelectorMenu.js";

import ar43 from "assets/ar433d.png";
import ar32 from "assets/ar323d.png";
import ar169 from "assets/ar1693d.png";

const AspectRatio3D = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Aspect Ratio for" bold="Classic 3D Games" />
          <Main>
            <p className="lead">
              Chose your aspect ratio for Dreamcast, Saturn and Nintendo 64
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img src={ar169} className={ar.classic3d != "169"  && "is-hidden"} alt="Background" />
                <img src={ar43} className={ar.classic3d != "43"  && "is-hidden"} alt="Background" />
                <img src={ar32} className={ar.classic3d != "32"  && "is-hidden"} alt="Background" />                
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick("43")}>
                    <Card css={ar.classic3d == 43 && "is-selected"}>
                      <span class="h3">4:3</span>
                      <p>Original aspect ratio</p>               
                    </Card>
                  </li>
                  <li onClick={() => onClick("32")}>
                    <Card css={ar.classic3d == 32 && "is-selected"}>
                      <span class="h3">3:2</span>
                      <p>Less black bars, slight distortion</p>               
                    </Card>
                  </li>
                  <li onClick={() => onClick("169")}>
                    <Card css={ar.classic3d == 169 && "is-selected"}>
                      <span class="h3">16:9</span>
                      <p>Fullscreen using WideScreen hacks</p>               
                    </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="aspect-ratio-dolphin"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AspectRatio3D;
