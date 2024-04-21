import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';
import Notification from 'components/molecules/Notification/Notification';
import Main from 'components/organisms/Main/Main';

import { gyroDsuImg } from 'components/utils/images/images';

function GyroDSU({
  installClick,
  showNotification,
  textNotification,
  disableButton,
}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <p className="lead">
        SteamDeckGyroDSU is a plugin that allows you to use your Steam Deck
        Gyroscope in Cemu (Wii U), Citra (3DS), Dolphin (Gamecube and Wii),
        Ryujinx (Nintendo Switch), and Yuzu (Nintendo Switch) games. Learn more
        about SteamDeckGyroDSU{' '}
        <LinkSimple
          css="link-simple--1"
          href="https://github.com/kmicki/SteamDeckGyroDSU"
          target="_blank"
        >
          here
        </LinkSimple>
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Install GyroDSU"
              onClick={installClick}
              disabled={disableButton && 'true'}
            >
              Install SteamDeckGyroDSU
            </BtnSimple>
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={gyroDsuImg} alt="RetroAchievements" />
          </div>
        </div>
      </Main>
    </>
  );
}

GyroDSU.propTypes = {
  installClick: PropTypes.func,
  showNotification: PropTypes.bool,
  textNotification: PropTypes.string,
  disableButton: PropTypes.bool,
};

GyroDSU.defaultProps = {
  installClick: '',
  showNotification: '',
  textNotification: '',
  disableButton: '',
};

export default GyroDSU;
