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

// import dataStore from 'data/store.json';
//
// const { store } = dataStore;

import { iconSuccess, iconDanger } from 'components/utils/images/images';
function StoreFront({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) {
  const navigate = useNavigate();
  const { state, setState } = useContext(GlobalContext);

  const { storagePath } = state;

  const [statePage, setStatePage] = useState({
    installing: false,
    modal: false,
    game: {
      title: undefined,
      pictures: { titlescreens: [undefined], screenshots: [undefined] },
    },
    games: null,
  });
  const { modal, game, installing, games } = statePage;

  const [stateSystem, setStateSystem] = useState({
    system: null,
  });
  const { system } = stateSystem;

  const { featured } = dataJson;

  useEffect(() => {
    ipcChannel.sendMessage('get-store');
    ipcChannel.once('get-store', (store) => {
      // No versioning found, what to do?

      console.log({ store });

      setStatePage({
        ...statePage,
        games: store.store,
      });
    });
  }, []);

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

  const ipcChannel = window.electron.ipcRenderer;

  const installGame = (game, system) => {
    setStatePage({
      ...statePage,
      installing: true,
    });
    ipcChannel.sendMessage('installGame', [game, storagePath, system]);
    ipcChannel.once('installGame', (error, stdout, stderr) => {
      console.log({ error, stdout, stderr });
      if (stdout.includes('true')) {
        alert('Game Installed.\nGo back to EmulationStation to play it');
      } else {
        alert('There was an error installing the game');
      }
      setStatePage({
        ...statePage,
        installing: false,
      });
    });
  };

  const showSystem = (id) => {
    const showThis = games.filter((item) => item.system === id);
    setStateSystem({
      system: showThis,
    });
  };
  let extraCSS;
  system !== null ? (extraCSS = 'is-hidden') : (extraCSS = '');

  return (
    <>
      <Main>
        <div className={`featured-games-list ${extraCSS}`}>
          <p className="h4" onClick={toggleModal}>
            Featured games
          </p>
          <hr />
          <ul>
            {featured.map((item, i) => {
              return (
                <StoreGame
                  disabled={installing}
                  key={item.title}
                  title={item.title}
                  img={item.pictures.titlescreens[0]}
                  tags={item.tags}
                  css="store-game--featured"
                  onMore={() => toggleModal(item)}
                  onInstall={() => installGame(item.file, item.system)}
                />
              );
            })}
          </ul>
        </div>

        <div className="container--grid">
          {games != null &&
            games.map((item, i) => {
              return (
                <div data-col-md="2">
                  <CardSettings
                    disabled={installing}
                    key={item.name}
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

        <div className="games-details">
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
                          disabled={installing}
                          key={item.title}
                          title={item.title}
                          img={item.pictures.titlescreens[0]}
                          system={logo_gb}
                          onMore={() => toggleModal(item)}
                          onInstall={() => installGame(item.file, item.system)}
                        />
                      );
                    })}
                  </ul>
                </>
              );
            })}
        </div>
      </Main>

      <div className={`game-details ${modal ? 'is-shown' : ''}`}>
        <div className="game-details__box">
          <div className="game-details__head">
            <div className="container--grid">
              <div data-col-sm="6">
                <span className="h2">{game.title}</span>
                <div className="game-details__tags">
                  {game.tags &&
                    game.tags.map((item, i) => {
                      return (
                        <small
                          key={item}
                          className="tag"
                          style={{ background: `var(--${item})` }}
                        >
                          {item}
                        </small>
                      );
                    })}
                </div>
                <p>{game.description}</p>
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Next"
                  onClick={() => installGame(game.file, game.system)}
                  disabled={installing}
                >
                  Install
                </BtnSimple>
              </div>
              <div data-col-sm="6">
                <img src={game.pictures.screenshots[0]} alt="Screenshot" />
                {/* <div className="game-details__thumbnails">
                      {game.pictures.screenshots.map((item, i) => {
                        return <img src={item} alt="Screenshot" />;
                      })}
                    </div> */}
              </div>
            </div>
          </div>
          <div className="game-details__footer">
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
}

export default StoreFront;
