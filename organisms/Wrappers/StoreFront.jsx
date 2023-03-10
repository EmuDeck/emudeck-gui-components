import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'context/globalContext';
import CardSettings from 'components/molecules/CardSettings/CardSettings';
import Main from 'components/organisms/Main/Main';

import { Img, BtnSimple } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card';
import StoreGame from 'components/molecules/StoreGame/StoreGame';

import {
  logo_genesis,
  logo_snes,
  logo_gb,
  logo_mastersystem,
  icon_32X,
  icon_5200,
  icon_7800,
  icon_X68000,
  icon_amiga,
  icon_arcade,
  icon_atari,
  icon_atarist,
  icon_c64,
  icon_col,
  icon_cpc,
  icon_cps1,
  icon_cps2,
  icon_cps3,
  icon_dos,
  icon_fairchild,
  icon_nes,
  icon_fds,
  icon_gb,
  icon_gba,
  icon_gbc,
  icon_gg,
  icon_gw,
  icon_itv,
  icon_lynx,
  icon_genesis,
  icon_megaduck,
  icon_mastersystem,
  icon_mastersystemx,
  icon_neocd,
  icon_neogeo,
  icon_ngp,
  icon_ody,
  icon_pce,
  icon_pcecd,
  icon_pico,
  icon_poke,
  icon_ports,
  icon_ps,
  icon_satella,
  icon_scummvm,
  icon_search,
  icon_segacd,
  icon_segasgone,
  icon_snes,
  icon_sgb,
  icon_sgfx,
  icon_sufami,
  icon_supervision,
  icon_tic,
  icon_vb,
  icon_vdp,
  icon_vectrex,
  icon_ws,
  icon_zxs,
} from 'components/utils/images/systems';

const icon = {
  icon_32X: icon_32X,
  icon_5200: icon_5200,
  icon_7800: icon_7800,
  icon_X68000: icon_X68000,
  icon_amiga: icon_amiga,
  icon_arcade: icon_arcade,
  icon_atari: icon_atari,
  icon_atarist: icon_atarist,
  icon_c64: icon_c64,
  icon_col: icon_col,
  icon_cpc: icon_cpc,
  icon_cps1: icon_cps1,
  icon_cps2: icon_cps2,
  icon_cps3: icon_cps3,
  icon_dos: icon_dos,
  icon_fairchild: icon_fairchild,
  icon_nes: icon_nes,
  icon_fds: icon_fds,
  icon_gb: icon_gb,
  icon_gba: icon_gba,
  icon_gbc: icon_gbc,
  icon_gg: icon_gg,
  icon_gw: icon_gw,
  icon_itv: icon_itv,
  icon_lynx: icon_lynx,
  icon_genesis: icon_genesis,
  icon_megaduck: icon_megaduck,
  icon_mastersystem: icon_mastersystem,
  icon_mastersystemx: icon_mastersystemx,
  icon_neocd: icon_neocd,
  icon_neogeo: icon_neogeo,
  icon_ngp: icon_ngp,
  icon_ody: icon_ody,
  icon_pce: icon_pce,
  icon_pcecd: icon_pcecd,
  icon_pico: icon_pico,
  icon_poke: icon_poke,
  icon_ports: icon_ports,
  icon_ps: icon_ps,
  icon_satella: icon_satella,
  icon_scummvm: icon_scummvm,
  icon_search: icon_search,
  icon_segacd: icon_segacd,
  icon_segasgone: icon_segasgone,
  icon_snes: icon_snes,
  icon_sgb: icon_sgb,
  icon_sgfx: icon_sgfx,
  icon_sufami: icon_sufami,
  icon_supervision: icon_supervision,
  icon_tic: icon_tic,
  icon_vb: icon_vb,
  icon_vdp: icon_vdp,
  icon_vectrex: icon_vectrex,
  icon_ws: icon_ws,
  icon_zxs: icon_zxs,
};

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

  const [statePage, setStatePage] = useState({
    modal: false,
    game: {
      title: undefined,
      pictures: { titlescreens: [undefined], screenshots: [undefined] },
    },
  });
  const { modal, game } = statePage;

  const [stateSystem, setStateSystem] = useState({
    system: null,
  });
  const { system } = stateSystem;

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

  const showSystem = (id) => {
    const showThis = store.filter((item) => item.system == id);

    setStateSystem({
      system: showThis,
    });
  };

  return (
    <>
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
        <div className="container--grid">
          {store.map((item, i) => {
            return (
              <div data-col-md="2">
                <CardSettings
                  css="is-highlighted"
                  btnCSS="btn-simple--1"
                  icon={icon[`icon_${item.system}`]}
                  iconSize="md"
                  title={item.name}
                  onClick={() => showSystem(item.system)}
                />
              </div>
            );
          })}
        </div>

        <div class="games-details">
          {system !== null &&
            system.map((item, i) => {
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
        </div>
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
                <img class="game-details__logo" src={logo_genesis} alt="Logo" />
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
    </>
  );
};

export default StoreFront;
