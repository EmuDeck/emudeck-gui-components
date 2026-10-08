import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';
import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

import { imgExternal, imgUSBDeck } from 'components/utils/images/images';

function CopyGamesAuto({ onClickCreate }) {
  const { t } = useTranslation();
  return (
    <Main>
      <div className="container--grid">
        <div data-col-sm="6">
          <span className="h4">{t('CopyGamesPage.usb.twoWays')}</span>
          <span className="h5">a) {t('CopyGamesPage.usb.otherPC')}</span>
          <p
            dangerouslySetInnerHTML={{
              __html: t('CopyGamesPage.usb.intro'),
            }}
          />
          <BtnSimple
            css="btn-simple--2"
            type="link"
            href="https://github.com/EmuDeck/quickstart/archive/refs/heads/main.zip"
            aria={t('CopyGamesPage.usb.downloadZip')}
          >
            {t('CopyGamesPage.usb.downloadZip')}
          </BtnSimple>

          <span className="h5">b) {t('CopyGamesPage.usb.generate')}</span>
          <p>{t('CopyGamesPage.usb.generateDesc')}</p>
          <div className="cards">
            <Card css="card--horizontal" onClick={() => onClickCreate()}>
              <img src={imgExternal} width="100" alt="Background" />
              <span className="h6">{t('CopyGamesPage.usb.drive')}</span>
            </Card>
          </div>
        </div>
        <div data-col-sm="6">
          <img src={imgUSBDeck} alt={t('CopyGamesPage.usb.insertUsb')} />
        </div>
      </div>
    </Main>
  );
}

CopyGamesAuto.propTypes = {
  onClickCreate: PropTypes.func,
};

CopyGamesAuto.defaultProps = {
  onClickCreate: () => {},
};

export default CopyGamesAuto;
