import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
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
  const { state, setState } = useContext(GlobalContext);
  const { system } = state;

  return (
    <>
      <p className="lead">
        {t('DeckyRomLauncherPage.intro')}
        <br />
        {t('DeckyRomLauncherPage.autoDetect')}
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            {hasSudo === false && system !== 'win32' && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria={t('DeckyRomLauncherPage.install')}
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                {t('DeckyRomLauncherPage.install')}
              </BtnSimple>
            )}

            {system === 'win32' && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria={t('EmuDeckyPage.install')}
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                {t('DeckyRomLauncherPage.install')}
              </BtnSimple>
            )}

            {hasSudo === true && system !== 'win32' && (
              <div className="form">
                <p>{t('general.sudoDetected')}</p>
                <FormInputSimple
                  label={t('general.sudoPassword')}
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
                    aria={t('DeckyRomLauncherPage.install')}
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    {t('DeckyRomLauncherPage.install')}
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
  sudoPass: 'EmuDecky!',
  showNotification: '',
  textNotification: '',
  passValidates: '',
  disableButton: '',
};

export default DeckyRomLauncher;
