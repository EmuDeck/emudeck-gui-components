import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

function EmulatorResolution({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { resolutions, overwriteConfigEmus } = state;
  return (
    <>
      <p className="lead">
        Choose the resolution you would like to use for your emulators. Keep in
        mind the higher the resolution, the beefier computer you will need.
      </p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            {overwriteConfigEmus.duckstation.status && (
              <>
                <div className="duckstation">
                  <button type="button" className="h5">
                    PlayStation 1 Games
                  </button>
                  <div className="cards">
                    <Card
                      css={
                        resolutions.duckstation === '720P' ? 'is-selected' : ''
                      }
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('duckstation', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '1080P' ? 'is-selected' : ''
                      }
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('duckstation', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '1440P' ? 'is-selected' : ''
                      }
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('duckstation', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card
                      css={
                        resolutions.duckstation === '4K' ? 'is-selected' : ''
                      }
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('duckstation', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.pcsx2.status && (
              <>
                <div className="pcsx2">
                  <button type="button" className="h5">
                    PlayStation 2 Games
                  </button>
                  <div className="cards">
                    <Card
                      css={resolutions.pcsx2 === '720P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('pcsx2', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.pcsx2 === '1080P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('pcsx2', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.pcsx2 === '1440P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('pcsx2', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card css={resolutions.pcsx2 === '4K' ? 'is-selected' : ''}>
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('pcsx2', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.rpcs3.status && (
              <>
                <div className="rpcs3">
                  <button type="button" className="h5">
                    PlayStation 3 Games
                  </button>
                  <div className="cards">
                    <Card
                      css={resolutions.rpcs3 === '720P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('rpcs3', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.rpcs3 === '1080P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('rpcs3', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.rpcs3 === '1440P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('rpcs3', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card css={resolutions.rpcs3 === '4K' ? 'is-selected' : ''}>
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('rpcs3', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.yuzu.status && (
              <div className="yuzu">
                <button type="button" className="h5">
                  Switch Games
                </button>
                <div className="cards">
                  <Card css={resolutions.yuzu === '720P' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('yuzu', '720P')}
                    >
                      720P
                    </button>
                  </Card>
                  <Card css={resolutions.yuzu === '1080P' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('yuzu', '1080P')}
                    >
                      1080P
                    </button>
                  </Card>
                  <Card css={resolutions.yuzu === '1440P' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('yuzu', '1440P')}
                    >
                      1440P
                    </button>
                  </Card>
                  <Card css={resolutions.yuzu === '4K' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('yuzu', '4K')}
                    >
                      4K
                    </button>
                  </Card>
                </div>
              </div>
            )}
          </div>
          <div data-col-sm="6">
            {overwriteConfigEmus.duckstation.status && (
              <>
                <div className="dolphin">
                  <button type="button" className="h5">
                    GameCube and Wii Games
                  </button>
                  <div className="cards">
                    <Card
                      css={resolutions.dolphin === '720P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('dolphin', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '1080P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('dolphin', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '1440P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('dolphin', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.dolphin === '4K' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('dolphin', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>

                <hr />
              </>
            )}
            {overwriteConfigEmus.duckstation.status && (
              <>
                <div className="cemu">
                  <button type="button" className="h5">
                    Wii U Games
                  </button>
                  <div className="cards">
                    <Card
                      css={resolutions.cemu === '720P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('cemu', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.cemu === '1080P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('cemu', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.cemu === '1440P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('cemu', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card css={resolutions.cemu === '4K' ? 'is-selected' : ''}>
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('cemu', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.duckstation.status && (
              <>
                <div className="melonds">
                  <button type="button" className="h5">
                    Nintendo DS Games
                  </button>
                  <div className="cards">
                    <Card
                      css={resolutions.melonds === '720P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('melonds', '720P')}
                      >
                        720P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.melonds === '1080P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('melonds', '1080P')}
                      >
                        1080P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.melonds === '1440P' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('melonds', '1440P')}
                      >
                        1440P
                      </button>
                    </Card>
                    <Card
                      css={resolutions.melonds === '4K' ? 'is-selected' : ''}
                    >
                      <button
                        type="button"
                        className="h6"
                        onClick={() => onClick('melonds', '4K')}
                      >
                        4K
                      </button>
                    </Card>
                  </div>
                </div>
                <hr />
              </>
            )}
            {overwriteConfigEmus.duckstation.status && (
              <div className="citra">
                <button type="button" className="h5">
                  Nintendo 3DS Games
                </button>
                <div className="cards">
                  <Card css={resolutions.citra === '720P' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('citra', '720P')}
                    >
                      720P
                    </button>
                  </Card>
                  <Card
                    css={resolutions.citra === '1080P' ? 'is-selected' : ''}
                  >
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('citra', '1080P')}
                    >
                      1080P
                    </button>
                  </Card>
                  <Card
                    css={resolutions.citra === '1440P' ? 'is-selected' : ''}
                  >
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('citra', '1440P')}
                    >
                      1440P
                    </button>
                  </Card>
                  <Card css={resolutions.citra === '4K' ? 'is-selected' : ''}>
                    <button
                      type="button"
                      className="h6"
                      onClick={() => onClick('citra', '4K')}
                    >
                      4K
                    </button>
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
