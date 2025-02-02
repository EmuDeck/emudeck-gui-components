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
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            {hasSudo === false && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria={t('general.install')}
                onClick={installClick}
                disabled={disableButton && 'true'}
              >
                {t('general.install')}
              </BtnSimple>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>{t('general.sudo')}</p>
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
                    aria={t('general.install')}
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    {t('general.install')}
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
  sudoPass: 'EmuDecky!',
  showNotification: '',
  textNotification: '',
  passValidates: '',
  disableButton: '',
};

export default PowerTools;
