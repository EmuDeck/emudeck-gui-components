import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';
import Notification from 'components/molecules/Notification/Notification';
import Main from 'components/organisms/Main/Main';

import { gyroDsuImg } from 'components/utils/images/images';

function GyroDSU({
  onChange,
  onChangeSetPass,
  onChangeCheckPass,
  onClick,
  installClick,
  hasSudo,
  sudoPass,
  showNotification,
  textNotification,
  passValidates,
  disableButton,
}) {
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
            {hasSudo === false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install GyroDSU"
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                Install SteamDeckGyroDSU
              </BtnSimple>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>
                  We have detected you already have set a sudo password, type it
                  below to install SteamDeckGyroDSU.
                </p>
                <FormInputSimple
                  label="Sudo Password"
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={onChange}
                />
                {sudoPass !== '' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Install GyroDSU"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install SteamDeckGyroDSU
                  </BtnSimple>
                )}
              </div>
            )}
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
  onChange: PropTypes.func,
  onChangeSetPass: PropTypes.func,
  onChangeCheckPass: PropTypes.func,
  onClick: PropTypes.func,
  installClick: PropTypes.func,
  hasSudo: PropTypes.bool,
  sudoPass: PropTypes.string,
  showNotification: PropTypes.bool,
  textNotification: PropTypes.string,
  passValidates: PropTypes.bool,
  disableButton: PropTypes.bool,
};

GyroDSU.defaultProps = {
  onChange: '',
  onChangeSetPass: '',
  onChangeCheckPass: '',
  onClick: '',
  installClick: '',
  hasSudo: '',
  sudoPass: 'Decky!',
  showNotification: '',
  textNotification: '',
  passValidates: '',
  disableButton: '',
};

export default GyroDSU;
