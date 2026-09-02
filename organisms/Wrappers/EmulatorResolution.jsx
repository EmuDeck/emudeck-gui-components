import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

function EmulatorResolution({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { resolutions, overwriteConfigEmus } = state;
  return (
    <>
      <Main>
        <div className="container--grid">
          <div data-col-sm="12">
            {overwriteConfigEmus.duckstation.status && (
              <>
                <div className="duckstation" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.ps1')}
                    <br /> <small>DuckStation</small>
                  </span>

                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={
                        resolutions.duckstation === '720P' ? 'is-selected' : ''
                      }
                      onClick={() => onClick('duckstation', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '1080P' ? 'is-selected' : ''
                      }
                      onClick={() => onClick('duckstation', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '1440P' ? 'is-selected' : ''
                      }
                      onClick={() => onClick('duckstation', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '4K' ? 'is-selected' : ''
                      }
                      onClick={() => onClick('duckstation', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.pcsx2.status && (
              <>
                <div className="pcsx2" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.ps2')}
                    <br /> <small>PCSX2</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.pcsx2 === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('pcsx2', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.pcsx2 === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('pcsx2', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.pcsx2 === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('pcsx2', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.pcsx2 === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('pcsx2', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.rpcs3.status && (
              <>
                <div className="rpcs3" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.ps3')}
                    <br /> <small>RPCS3</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.rpcs3 === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('rpcs3', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.rpcs3 === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('rpcs3', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.rpcs3 === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('rpcs3', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.rpcs3 === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('rpcs3', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.ppsspp.status && (
              <>
                <div className="duckstation" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.psp')}
                    <br /> <small>PPSSPP</small>
                  </span>

                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.ppsspp === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('ppsspp', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.ppsspp === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('ppsspp', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.ppsspp === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('ppsspp', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.ppsspp === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('ppsspp', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.vita3k.status && (
              <>
                <div className="vita3k" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.psvita')}
                    <br /> <small>Vita3k</small>
                  </span>

                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.vita3k === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('vita3k', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.vita3k === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('vita3k', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.vita3k === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('vita3k', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.vita3k === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('vita3k', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.xemu.status && (
              <>
                <div className="xemu" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.xbox')}
                    <br /> <small>Xemu</small>
                  </span>

                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.xemu === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('xemu', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.xemu === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('xemu', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.xemu === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('xemu', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.xemu === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('xemu', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}

            {overwriteConfigEmus.ryujinx.status && (
              <>
                <div className="yuzu" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.switch')}
                    <br /> <small>Ryujinx / Citron / Yuzu / Eden</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.yuzu === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('yuzu', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.yuzu === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('yuzu', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.yuzu === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('yuzu', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.yuzu === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('yuzu', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
          </div>
          <div data-col-sm="12">
            {overwriteConfigEmus.dolphin.status && (
              <>
                <div className="dolphin" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.gamecubeWii')}
                    <br /> <small>Dolphin / PrimeHack</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.dolphin === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('dolphin', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>

                <hr />
              </>
            )}
            {overwriteConfigEmus.flycast.status && (
              <>
                <div className="flycast" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.dreamcast')}
                    <br /> <small>Flycast</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.flycast === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('flycast', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.flycast === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('flycast', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.flycast === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('flycast', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.flycast === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('flycast', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.melonds.status && (
              <>
                <div className="melonds" style={{ display: 'flex' }}>
                  <span className="h5" style={{ flexBasis: '40%' }}>
                    {t('systems.nds')}
                    <br /> <small>melonDS</small>
                  </span>
                  <div className="cards cards--mini" style={{ flex: 1 }}>
                    <Card
                      css={resolutions.melonds === '720P' ? 'is-selected' : ''}
                      onClick={() => onClick('melonds', '720P')}
                    >
                      <strong>720P</strong>
                    </Card>
                    <Card
                      css={resolutions.melonds === '1080P' ? 'is-selected' : ''}
                      onClick={() => onClick('melonds', '1080P')}
                    >
                      <strong>1080P</strong>
                    </Card>
                    <Card
                      css={resolutions.melonds === '1440P' ? 'is-selected' : ''}
                      onClick={() => onClick('melonds', '1440P')}
                    >
                      <strong>1440P</strong>
                    </Card>
                    <Card
                      css={resolutions.melonds === '4K' ? 'is-selected' : ''}
                      onClick={() => onClick('melonds', '4K')}
                    >
                      <strong>4K</strong>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.azahar.status && (
              <div className="citra" style={{ display: 'flex' }}>
                <span className="h5" style={{ flexBasis: '40%' }}>
                  {t('systems.n3ds')}
                  <br /> <small>Azahar</small>
                </span>
                <div className="cards cards--mini" style={{ flex: 1 }}>
                  <Card
                    css={resolutions.azahar === '720P' ? 'is-selected' : ''}
                    onClick={() => onClick('azahar', '720P')}
                  >
                    <strong>720P</strong>
                  </Card>
                  <Card
                    css={resolutions.azahar === '1080P' ? 'is-selected' : ''}
                    onClick={() => onClick('azahar', '1080P')}
                  >
                    <strong>1080P</strong>
                  </Card>
                  <Card
                    css={resolutions.azahar === '1440P' ? 'is-selected' : ''}
                    onClick={() => onClick('azahar', '1440P')}
                  >
                    <strong>1440P</strong>
                  </Card>
                  <Card
                    css={resolutions.azahar === '4K' ? 'is-selected' : ''}
                    onClick={() => onClick('azahar', '4K')}
                  >
                    <strong>4K</strong>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </Main>
    </>
  );
}

EmulatorResolution.propTypes = {
  onClick: PropTypes.func,
};

EmulatorResolution.defaultProps = {
  onClick: '',
};

export default EmulatorResolution;
