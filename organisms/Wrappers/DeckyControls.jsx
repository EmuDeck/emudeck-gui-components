import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';

import { DeckyControlsImg } from 'components/utils/images/images';

function DeckyControls({
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
        DeckyControls is a plugin that allows you to see all of EmuDeck controls
        and hotkeys while you are gaming. To use DeckyControls: In Game Mode,
        press the ... button, press the socket icon, and select the Emulator
        Hotkeys button.
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            {hasSudo === false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install DeckyControls"
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                Install DeckyControls
              </BtnSimple>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>
                  We have detected you have set a sudo password, type
                  it on the next input to install this tool.
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
                    aria="Install DeckyControls"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install DeckyControls
                  </BtnSimple>
                )}
              </div>
            )}
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={DeckyControlsImg} alt="RetroAchievements" />
          </div>
        </div>
      </Main>
    </>
  );
}

DeckyControls.propTypes = {
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

DeckyControls.defaultProps = {
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

export default DeckyControls;
