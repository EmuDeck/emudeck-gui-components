import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import Aside from 'components/organisms/Aside/Aside';
import Main from 'components/organisms/Main/Main';

import { Img, BtnSimple } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card';
import StoreGame from 'components/molecules/StoreGame/StoreGame';

import {
  logo_genesis,
  logo_snes,
  logo_gb,
  logo_mastersystem,
} from 'components/utils/images/systems';
import './store-front.scss';

import dataJson from 'data/store.json';

import { iconSuccess, iconDanger } from 'components/utils/images/images';
const StoreFront = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const navigate = useNavigate();
  const { state, setState } = useContext(GlobalContext);
  const { system } = state;

  const [statePage, setStatePage] = useState({
    modal: false,
    game: {
      title: undefined,
      pictures: { titlescreens: [undefined], screenshots: [undefined] },
    },
  });
  const { modal, game } = statePage;

  const { featured, store } = dataJson;

  const toggleModal = (item) => {
    if (!!item) {
      setStatePage({
        ...statePage,
        game: item,
        modal: !modal,
      });
    } else {
      setStatePage({
        ...statePage,
        modal: !modal,
        game: {
          title: undefined,
          pictures: { titlescreens: [undefined], screenshots: [undefined] },
        },
      });
    }
  };

  const installGame = (game) => {
    console.log('install!');
  };

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="" />
          <Main>
            <p className="h4" onClick={toggleModal}>
              Featured games
            </p>
            <hr />
            <ul className="featured-games-list">
              {featured.map((item, i) => {
                return (
                  <StoreGame
                    title={item.title}
                    img={item.pictures.titlescreens[0]}
                    system={logo_genesis}
                    tags={item.tags}
                    css="store-game--featured"
                    onMore={() => toggleModal(item)}
                    onInstall={() => installGame(item)}
                  />
                );
              })}
            </ul>

            {console.log({ store })}

            {store.map((item, i) => {
              return (
                <>
                  <p className="h4">{item.name}</p>
                  <hr />
                  <ul className="games-list">
                    {item.games.map((item, i) => {
                      return (
                        <StoreGame
                          title={item.title}
                          img={item.pictures.titlescreens[0]}
                          system={logo_gb}
                          onMore={() => toggleModal(item)}
                          onInstall={() => installGame(item)}
                        />
                      );
                    })}
                  </ul>
                </>
              );
            })}

            {/*
            <p className="h4">Game Boy</p>
            <hr />
            <ul className="games-list">
              {store.gb.map((item, i) => {
                return (
                  <StoreGame
                    title={item.title}
                    img={item.pictures.titlescreens[0]}
                    system={logo_gb}
                    onMore={() => toggleModal(item)}
                    onInstall={() => installGame(item)}
                  />
                );
              })}
            </ul>


            <p className="h4">Game Boy Advance</p>
            <hr />
            <ul className="games-list">
              {store.gba.map((item, i) => {
                return (
                  <StoreGame
                    title={item.title}
                    img={item.pictures.titlescreens[0]}
                    system={logo_gb}
                    onMore={() => toggleModal(item)}
                    onInstall={() => installGame(item)}
                  />
                );
              })}
            </ul> */}
          </Main>

          <div class={`game-details ${modal ? 'is-shown' : ''}`}>
            <div class="game-details__box">
              <div class="game-details__head">
                <div className="container--grid">
                  <div data-col-sm="6">
                    <span class="h2">{game.title}</span>
                    <div class="game-details__tags">
                      {game.tags &&
                        game.tags.map((item, i) => {
                          return (
                            <small
                              className="tag"
                              style={{ background: `var(--${item})` }}
                            >
                              {item}
                            </small>
                          );
                        })}
                    </div>
                    <img
                      class="game-details__logo"
                      src={logo_genesis}
                      alt="Logo"
                    />
                    <p>{game.description}</p>
                    <BtnSimple css="btn-simple--1" type="button" aria="Next">
                      Install
                    </BtnSimple>
                  </div>
                  <div data-col-sm="6">
                    <img src={game.pictures.screenshots[0]} alt="Screenshot" />
                    {/* <div class="game-details__thumbnails">
                      {game.pictures.screenshots.map((item, i) => {
                        return <img src={item} alt="Screenshot" />;
                      })}
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="game-details__footer">
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Next"
                  onClick={() => toggleModal()}
                >
                  Close
                </BtnSimple>
              </div>
            </div>
          </div>

          <footer className="footer">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Go Back"
              disabled={false}
              onClick={() => navigate(-1)}
            >
              Go Back
            </BtnSimple>
          </footer>
        </div>
      </div>
    </>
  );
};

export default StoreFront;
