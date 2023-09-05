import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { steamUI, winDesktop } from 'components/utils/images/images';

function GameMode({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { gamemode } = state;
  return (
    <>
      <p className="lead">Select how you want to boot your device.</p>
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
              'SteamUI',
              'Mimic the Steam Deck experience by seamlessly booting directly into SteamUI.<br>Access your Desktop by exiting Steam.',
              true,
            ],
            [
              () => onClick(false),
              gamemode === false ? 'is-selected' : '',
              'Windows Desktop',
              'Boot to the Windows Desktop like any Windows PC',
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
