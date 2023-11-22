import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

import {
  imgSD,
  imgInternal,
  imgExternal,
  imgNetwork,
} from 'components/utils/images/images';

function RomStorage({
  onClick,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  customPath,
  showSDCard,
  showInternal,
  hddrives,
}) {
  const { state } = useContext(GlobalContext);
  const { storage, system } = state;
  return (
    <>
      <p className="lead">
        Your ROM directory will be squared away within an Emulation folder in
        your selected directory. If you do not see your SD Card, format it first
        in Game Mode.
      </p>
      <Main>
        <div className="cards">
          {showSDCard && (
            <Card
              css={storage === 'SD-Card' && 'is-selected'}
              onClick={() =>
                sdCardValid === true ? onClick('SD-Card') : reloadSDcard()
              }
            >
              <img src={imgSD} width="100" alt="Background" />
              <span className="h5">SD Card</span>
              {sdCardName != null && <span className="h6">{sdCardName}</span>}
              {sdCardName === null ||
                (sdCardValid === false && (
                  <span className="h6">
                    Not detected
                    <br />
                    Click here to try again
                  </span>
                ))}
            </Card>
          )}
          {showInternal && (
            <Card
              css={storage === 'Internal Storage' && 'is-selected'}
              onClick={() => onClick('Internal Storage')}
            >
              <img src={imgInternal} width="100" alt="Background" />
              <span className="h5">Internal Storage</span>
            </Card>
          )}
          {hddrives &&
            hddrives.map((item) => {
              if (item.letter === null) {
              } else {
                return (
                  <Card
                    css={storage === `${item.letter}\\` && 'is-selected'}
                    onClick={() => onClick(item.letter)}
                  >
                    <img
                      src={
                        item.type === 'Internal'
                          ? imgInternal
                          : item.name.includes('card')
                          ? imgSD
                          : item.name.includes('Card')
                          ? imgSD
                          : item.type === 'External'
                          ? imgExternal
                          : imgNetwork
                      }
                      width="100"
                      alt="Background"
                    />
                    <span className="h5">{`${item.letter}\\`}</span>
                  </Card>
                );
              }
            })}
          {system !== 'win32' && (
            <Card
              css={storage === 'Custom' && 'is-selected'}
              onClick={() => onClick('Custom')}
            >
              <img src={imgInternal} width="100" alt="Background" />
              <span className="h5">
                {system === 'win32' && 'Custom Drive'}
                {system !== 'win32' && 'Custom Directory'}
              </span>
              {customPath && storage === 'Custom' && (
                <span className="h6">{customPath}</span>
              )}
            </Card>
          )}
        </div>
      </Main>
    </>
  );
}

RomStorage.propTypes = {
  onClick: PropTypes.func,
  sdCardValid: PropTypes.func,
  sdCardName: PropTypes.func,
  reloadSDcard: PropTypes.func,
  customPath: PropTypes.string,
  hddrives: PropTypes.string,
  showSDCard: PropTypes.bool,
  showInternal: PropTypes.bool,
};

RomStorage.defaultProps = {
  onClick: '',
  sdCardValid: '',
  sdCardName: '',
  reloadSDcard: '',
  customPath: '',
  hddrives: '',
  showSDCard: '',
  showInternal: '',
};

export default RomStorage;
