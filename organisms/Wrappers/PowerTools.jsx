import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import Notification from 'components/molecules/Notification/Notification';
import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';

import { powerToolsImg } from 'components/utils/images/images';

function PowerTools({
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
        Power Tools is a plugin that allows you to tweak your CPU & GPU to for
        maximum performance on more demanding emulators. Installing Power Tools
        on this menu will also install Decky Loader, a plugin manager. You can
        read more about Power Tools,{' '}
        <LinkSimple
          css="link-simple--1"
          href="https://github.com/NGnius/PowerTools"
          target="_blank"
        >
          here
        </LinkSimple>
        and Decky Loader,{' '}
        <LinkSimple
          css="link-simple--1"
          href="https://github.com/SteamDeckHomebrew/decky-loader"
          target="_blank"
        >
          here.
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
                aria="Install PowerTools"
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                Install PowerTools
              </BtnSimple>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>
                  We have detected you already have set a sudo password, type it
                  below to install Power Tools.
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
                    aria="Install PowerTools"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install PowerTools
                  </BtnSimple>
                )}
              </div>
            )}
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={powerToolsImg} alt="RetroAchievements" />
          </div>
        </div>
      </Main>
    </>
  );
}

PowerTools.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onChangeSetPass: PropTypes.func,
  onChangeCheckPass: PropTypes.func,
  installClick: PropTypes.func,
  hasSudo: PropTypes.bool,
  sudoPass: PropTypes.string,
  showNotification: PropTypes.bool,
  textNotification: PropTypes.string,
  passValidates: PropTypes.bool,
  disableButton: PropTypes.bool,
};

PowerTools.defaultProps = {
  onClick: '',
  onChange: '',
  onChangeSetPass: '',
  onChangeCheckPass: '',
  installClick: '',
  hasSudo: '',
  sudoPass: 'Decky!',
  showNotification: '',
  textNotification: '',
  passValidates: '',
  disableButton: '',
};

export default PowerTools;
