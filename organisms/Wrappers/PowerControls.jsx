import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';

function PowerControls({
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
        <br />
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

PowerControls.propTypes = {
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

export default PowerControls;
