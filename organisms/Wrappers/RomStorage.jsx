import { useTranslation } from 'react-i18next';
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
  showCustom,
  hddrives,
  storage,
}) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { system } = state;
  return (
    <>
      <Main>
        <div className="cards">
          {showSDCard && system !== 'darwin' && (
            <Card
              css={
                storage === 'SD-Card'
                  ? 'is-selected card--horizontal'
                  : 'card--horizontal'
              }
              onClick={() =>
                sdCardValid === true ? onClick('SD-Card') : reloadSDcard()
              }
            >
              <img src={imgSD} width="100" alt="Background" />
              {sdCardValid && <span className="h6">SD Card</span>}
              {sdCardName === null ||
                (sdCardValid === false && (
                  <span className="h6">Error detecting SD Card</span>
                ))}
            </Card>
          )}
          {showInternal && (
            <Card
              css={
                storage === 'Internal Storage'
                  ? 'is-selected card--horizontal'
                  : 'card--horizontal'
              }
              onClick={() => onClick('Internal Storage')}
            >
              <img src={imgInternal} width="100" alt="Background" />
              <span className="h6">Internal Storage</span>
            </Card>
          )}
          {hddrives &&
            hddrives.map((item) => {
              if (item.letter === null) {
              } else {
                return (
                  <Card
                    css={
                      storage === `${item.letter}\\`
                        ? 'is-selected card--horizontal'
                        : 'card--horizontal'
                    }
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
                    <span className="h6">{`${item.letter}\\`}</span>
                  </Card>
                );
              }
            })}
          {showCustom && (
            <Card
              css={
                storage === 'Custom'
                  ? 'is-selected card--horizontal'
                  : 'card--horizontal'
              }
              onClick={() => onClick('Custom')}
            >
              <img src={imgInternal} width="100" alt="Background" />
              <span className="h6">
                {system === 'win32' && 'Custom Drive'}
                {system !== 'win32' && 'Custom Directory'}
              </span>
            </Card>
          )}
        </div>
      </Main>
    </>
  );
}

RomStorage.propTypes = {
  onClick: PropTypes.func,
  sdCardValid: PropTypes.any,
  sdCardName: PropTypes.any,
  reloadSDcard: PropTypes.func,
  customPath: PropTypes.string,
  hddrives: PropTypes.bool,
  showSDCard: PropTypes.bool,
  showInternal: PropTypes.bool,
};

export default RomStorage;
