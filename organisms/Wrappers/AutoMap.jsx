import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';
import { automapon } from 'components/utils/images/images';
function AutoMap({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { automap, overwriteConfigEmus } = state;
  return (
    <>
      <Main>
        <div className="selector-menu">
          <div className="selector-menu__text">
            <div className="yuzu" style={{ display: 'flex' }}>
              <span className="h5" style={{ flexBasis: '40%' }}>
                Switch
                <br /> <small>Ryujinx / Citron / Yuzu / Eden</small>
              </span>
              <div className="cards cards--mini" style={{ flex: 1 }}>
                <Card
                  css={automap.yuzu === true ? 'is-selected' : ''}
                  onClick={() => onClick('yuzu', true)}
                >
                  <strong>On</strong>
                </Card>
                <Card
                  css={automap.yuzu === false ? 'is-selected' : ''}
                  onClick={() => onClick('yuzu', false)}
                >
                  <strong>Off</strong>
                </Card>
              </div>
            </div>
            <hr />
            {overwriteConfigEmus.dolphin.status && (
              <>
                <div className="dolphin" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    GameCube & Wii
                    <br /> <small>Dolphin / PrimeHack</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={automap.dolphin === true ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', true)}
                    >
                      <strong>On</strong>
                    </Card>
                    <Card
                      css={automap.dolphin === false ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', false)}
                    >
                      <strong>Off</strong>
                    </Card>
                  </div>
                </div>

                <hr />
              </>
            )}
            {overwriteConfigEmus.cemu.status && (
              <>
                <div className="cemu" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    Nintendo Wii U
                    <br /> <small>Cemu</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={automap.azahar === true ? 'is-selected' : ''}
                      onClick={() => onClick('azahar', true)}
                    >
                      <strong>On</strong>
                    </Card>
                    <Card
                      css={automap.azahar === false ? 'is-selected' : ''}
                      onClick={() => onClick('azahar', false)}
                    >
                      <strong>Off</strong>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="selector-menu__img">
            <img src={automapon} alt="Background" />
          </div>
        </div>
      </Main>
    </>
  );
}

export default AutoMap;
