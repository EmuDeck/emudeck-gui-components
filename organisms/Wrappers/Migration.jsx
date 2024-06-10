import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

import { imgInternal, imgSD } from 'components/utils/images/images';

function Migration({
  onClick,
  onClickStart,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  storage,
  storageDestination,
  storagePath,
  storagePathDestination,
  statusMigration,
}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <div className="container--grid">
          <div data-col-sm="12">
            <span className="h4">{t('Migration.current')}</span>
            <div className="cards">
              {storage === 'SD-Card' && (
                <Card
                  css={
                    storage === 'SD-Card'
                      ? 'is-selected card--horizontal'
                      : ' card--horizontal'
                  }
                >
                  <img src={imgSD} width="100" alt="Background" />
                  <span className="h5">{t('Migration.sdCard')}</span>
                  {sdCardName != null && (
                    <span className="h6">{sdCardName}</span>
                  )}
                  {sdCardName === null ||
                    (sdCardValid === false && (
                      <span className="h6">{t('Migration.errorDetected')}</span>
                    ))}
                </Card>
              )}

              {storage === 'Internal Storage' && (
                <Card
                  css={
                    storage === 'Internal Storage'
                      ? 'is-selected card--horizontal'
                      : ' card--horizontal'
                  }
                >
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">{t('Migration.internalStorage')}</span>
                </Card>
              )}
              {storage === 'Custom' && (
                <Card
                  css={
                    storage === 'Custom card--horizontal'
                      ? 'is-selected card--horizontal'
                      : ' card--horizontal'
                  }
                >
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">{t('Migration.custom')}</span>
                  {storagePath && storage === 'Custom' && (
                    <span className="h6">{storagePath}</span>
                  )}
                </Card>
              )}
            </div>
          </div>
          <div data-col-sm="12">
            <span className="h4">{t('Migration.destination')}</span>
            <div className="cards">
              <Card
                css={
                  storageDestination === 'SD-Card'
                    ? 'is-selected card--horizontal'
                    : 'card--horizontal'
                }
                onClick={() =>
                  sdCardValid === true ? onClick('SD-Card') : reloadSDcard()
                }
              >
                <img src={imgSD} width="100" alt="Background" />
                {sdCardValid && <span className="h6">SD Card</span>}
                {sdCardName === null ||
                  (sdCardValid === false && (
                    <span className="h6">Error detecting SD Card</span>
                  ))}
              </Card>

              <Card
                css={
                  storageDestination === 'Internal Storage'
                    ? 'is-selected card--horizontal'
                    : 'card--horizontal'
                }
                onClick={() => onClick('Internal Storage')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h6">{t('Migration.internalStorage')}</span>
              </Card>

              <Card
                css={
                  storageDestination === 'Custom'
                    ? 'is-selected card--horizontal'
                    : 'card--horizontal'
                }
                onClick={() => onClick('Custom')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h6">{t('Migration.custom')}</span>
                {storagePathDestination && storageDestination === 'Custom' && (
                  <span className="h6">{storagePathDestination}</span>
                )}
              </Card>
            </div>
            {statusMigration === null && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria={t('Migration.start')}
                onClick={() => onClickStart()}
              >
                {t('Migration.start')}
              </BtnSimple>
            )}

            {statusMigration !== null && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria={t('Migration.migrating')}
                disabled
              >
                {t('Migration.migrating')}
              </BtnSimple>
            )}
          </div>
        </div>
      </Main>
    </>
  );
}

Migration.propTypes = {
  onClick: PropTypes.func,
  onClickStart: PropTypes.func,
  sdCardValid: PropTypes.bool,
  sdCardName: PropTypes.string,
  reloadSDcard: PropTypes.func,
  storage: PropTypes.string,
  storageDestination: PropTypes.string,
  storagePath: PropTypes.string,
  storagePathDestination: PropTypes.string,
  statusMigration: PropTypes.string,
};

Migration.defaultProps = {
  onClick: '',
  onClickStart: '',
  sdCardValid: '',
  sdCardName: '',
  reloadSDcard: '',
  storage: '',
  storageDestination: '',
  storagePath: '',
  storagePathDestination: '',
  statusMigration: '',
};
export default Migration;
