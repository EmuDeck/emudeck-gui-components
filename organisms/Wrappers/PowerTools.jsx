import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  return (
    <>
      <p className="lead">
        PowerControls is a plugin that allows you to tweak your CPU & GPU to for
        maximum performance on more demanding emulators as well as controlling
        TDP in compatible devices. Installing PowerControls on this menu will
        also install Decky Loader, a plugin manager. You can read more about
        Power Tools,{' '}
        <LinkSimple
          css="link-simple--1"
          href="https://github.com/mengmeet/PowerControl"
          target="_blank"
        >
          here
        </LinkSimple>{' '}
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
            {hasSudo === false && sudoPass === 'gamer' && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install PowerTools"
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                Install PowerControls
              </BtnSimple>
            )}
            {hasSudo === true && sudoPass !== 'gamer' && (
              <div className="form">
                <p>
                  EmuDeck has detected you already have set a sudo password,
                  type it below to install Power Tools.
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
                    Install PowerControls
                  </BtnSimple>
                )}
              </div>
            )}
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
