import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { steamUI, winDesktop } from 'components/utils/images/images';

function GameMode({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { gamemode } = state;
  return (
    <>
      <Main>
        <SelectorMenu
          imgs={[
            [steamUI, gamemode === false ? 'is-hidden' : ''],
            [winDesktop, gamemode === true ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(true),
              gamemode === true ? 'is-selected' : '',
              t('GameMode.steam.title'),
              t('GameMode.steam.description'),
              true,
            ],
            [
              () => onClick(false),
              gamemode === false ? 'is-selected' : '',
              t('GameMode.windows.title'),
              t('GameMode.windows.description'),
              true,
            ],
          ]}
        />
      </Main>
    </>
  );
}

GameMode.propTypes = {
  onClick: PropTypes.func,
};

GameMode.defaultProps = {
  onClick: '',
};

export default GameMode;
