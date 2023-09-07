import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';

import { emuDeckyImg } from 'components/utils/images/images';

function EmuDecky({
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
        EmuDecky is a plugin that allows you to see all of EmuDeck controls and
        hotkeys while you are gaming and event configure EmuDeck!. To use
        EmuDecky: In Game Mode, press the ... button, press the socket icon, and
        select EmuDecky.
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            {hasSudo === false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Install EmuDecky"
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                Install EmuDecky
              </BtnSimple>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>
                  We have detected you have set a sudo password, type it on the
                  next input to install this tool.
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
                    aria="Install EmuDecky"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install EmuDecky
                  </BtnSimple>
                )}
              </div>
            )}
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={emuDeckyImg} alt="EmuDecky" />
          </div>
        </div>
      </Main>
    </>
  );
}

EmuDecky.propTypes = {
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

EmuDecky.defaultProps = {
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

export default EmuDecky;
