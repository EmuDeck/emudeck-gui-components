import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";

import {
  BtnSimple,
  BtnGroup,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  Iframe,
  List,
  ProgressBar,
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from "getbasecore/Atoms";

const End = () => {
  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Installation" bold="complete!" />
          <Main>
            <p className="lead">BIOS</p>
            <p>
              You need to copy your BIOS for the following systems in their
              respective folders: <strong>Don't create new subfolders</strong>
            </p>
            <ul className="list-two-cols">
              <li>
                PlayStation 1 - <strong>Emulation/bios/</strong>
              </li>
              <li>
                Playstation 2 - <strong>Emulation/bios/</strong>
              </li>
              <li>
                Playstation 3 -{" "}
                <strong>Open RPCS3 and load Sony's official firmware</strong>
              </li>
              <li>
                Switch -{" "}
                <strong>
                  Emulation/bios/yuzu/ - Make sure you don't overwrite the
                  folders
                </strong>
              </li>
            </ul>
            <p className="lead">ROMS</p>
            <p>
              You need to copy your BIOS for the following systems in their
              respective folders: <strong>Don't create new subfolders</strong>
            </p>
          </Main>
          <Footer
            back="disabled"
            next="welcome"
            nextText="Finish"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default End;
