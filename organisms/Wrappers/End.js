import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";
import Card from "components/molecules/Card/Card.js";
import SimpleCarousel from "components/molecules/SimpleCarousel/SimpleCarousel.js";

import { ProgressBar } from "getbasecore/Atoms";

import sdlogo from "assets/sdlogo.png";
import amberlogo from "assets/amberelec.jpg";

const End = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage } = state;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          prevCounter = 1;
        }
        return prevCounter + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    <Card>
      <div class="container--grid">
        <div data-col-sm="9">
          <span class="h3">Emulation Folder</span>
          <p class="lead">
            We've created the following folders in your {storage}: <br />
            <br />
            <ul>
              <li>
                <strong>Emulation/roms</strong> - For your games
              </li>
              <li>
                <strong>Emulation/bios</strong> - For your Bios and Yuzu
                firmware
              </li>
              <li>
                <strong>Emulation/saves</strong> - Your saved games
              </li>
              <li>
                <strong>Emulation/storage</strong> - Shaders, PS3 installed
                games, etc.{" "}
                {storage == "SD-Card" &&
                  "to save space in your internal storage"}{" "}
              </li>
            </ul>
          </p>
        </div>
        <div data-col-sm="3">
          <img src={sdlogo} alt="bg" />
        </div>
      </div>
    </Card>,
    <Card>
      <div class="container--grid">
        <div data-col-sm="6">
          <span class="h2">Adding games</span>
          <p class="lead">
            When the installation is completed SteamRomManager will open to scan
            and add your games.
            <br />
            Copy your roms to your {storage}, in the Emulation/roms folder,
            don't put your games on its own subdirectories.
            <br />
            <strong>
              Tip:You can copy your roms using an external USB drive.
            </strong>
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/ss1.png" alt="bg" />
        </div>
      </div>
    </Card>,
    <Card>
      <div class="container--grid">
        <div data-col-sm="12">
          <span class="h2">Bios Paths</span>
          <p class="lead">
            Some games need the original system Bios to launch. <br />
            SoAn exaple of these systems are:
            <br />
            - Playstation 1, 2 and 3.
            <br />
            - SegaCD / MegaCD and Saturn.
            <br />
            - Switch.
            <br />
            <strong>
              Place then im Emulation/bios folder in your {storage}, don't use
              subdirectories.
              <br />
              Switch has an special folder in Emulation/bios/yuzu
            </strong>
          </p>
        </div>
      </div>
    </Card>,
    <Card>
      <div class="container--grid">
        <div data-col-sm="7">
          <span class="h2">AmberElec Hotkeys</span>
          <p class="lead">
            Almost all of the emulators use the AmberElec convention: <br />
            <br />
            <ul>
              <li>
                <strong>Select + Start</strong> - Exit Emulator
              </li>
              <li>
                <strong>Select + L1</strong> - Load state
              </li>
              <li>
                <strong>Select + R1</strong> - Save state
              </li>
              <li>
                <strong>Select + R2</strong> - Fast-forward
              </li>
              <li>
                <strong>L3 + R3</strong> - Menu (Only RetroArch)
              </li>
            </ul>
          </p>
        </div>
        <div data-col-sm="5">
          <img src={amberlogo} alt="bg" />
        </div>
      </div>
    </Card>,
    <Card>
      <div class="container--grid">
        <div data-col-sm="6">
          <span class="h2">Steam Input Profiles </span>
          <p class="lead">
            You can use Steam Deck's L4, L5, R4, R5 triggers to control some
            emulators hotkeys. Just select the right EmuDeck template for the
            system you want. <br />
            <strong>
              Do this for every 3DS, WiiU or Playstation 1 & 2 game.
            </strong>
          </p>
        </div>
        <div data-col-sm="6">
          <img src="https://www.emudeck.com/img/citra1.png" alt="bg" />
        </div>
      </div>
    </Card>,
  ];

  //console.log({ width });
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header
            title="Please read these tips while we are completing your"
            bold="installation!"
          />
          <Main>
            <SimpleCarousel nav={false} img={slides} />
            <br />
            <ProgressBar value={counter} max={100} />
          </Main>
          <Footer
            back="pegasus-theme"
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
