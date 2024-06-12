import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';

import { imgDeckyRomLauncher } from 'components/utils/images/images';

function DeckyRomLauncher({
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
        Rom Library is a plugin that allows you to have a second Steam Library
        with only your roms so they are not mixed up with your Steam games.
        <br />
        All games and artwork are detected automatically.
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            {hasSudo === false ||
              (sudoPass === 'gamer' && (
                <BtnSimple
                  css="btn-simple--1"
                  type="button"
                  aria="Install Rom Library"
                  onClick={installClick}
                  disabled={disableButton && 'true'}
                >
                  Install Rom Library
                </BtnSimple>
              ))}

            {hasSudo === true && sudoPass !== 'gamer' && (
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
                  value={sudoPass}
                />
                {sudoPass !== '' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Install Rom Library"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install Rom Library
                  </BtnSimple>
                )}
              </div>
            )}
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={imgDeckyRomLauncher} alt="DeckyRomLauncher" />
          </div>
        </div>
      </Main>
    </>
  );
}

DeckyRomLauncher.propTypes = {
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

DeckyRomLauncher.defaultProps = {
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

export default DeckyRomLauncher;
