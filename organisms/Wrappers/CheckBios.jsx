import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { BtnSimple } from 'getbasecore/Atoms';
import { Alert } from 'getbasecore/Molecules';
import Main from 'components/organisms/Main/Main';
import BiosChecker from 'components/organisms/BiosChecker/BiosChecker';

// BIOS checker with the tips and the check again button, used in the Check BIOS page and the install
function CheckBios() {
  const { t } = useTranslation();
  const [refresh, setRefresh] = useState(0);

  return (
    <Main>
      <div className="container--grid">
        <div data-col-sm="6">
          <BiosChecker refresh={refresh} />
        </div>
        <div data-col-sm="6">
          <Alert css="alert--info">
            <ul className="list">
              <li>{t('CheckBios.tip1')}</li>
              <li>{t('CheckBios.tip2')}</li>
              <li>{t('CheckBios.tip3')}</li>
              <li>{t('CheckBios.tip4')}</li>
            </ul>
          </Alert>
          <BtnSimple
            css="btn-simple--2"
            type="button"
            aria={t('CheckBiosPage.checkAgain')}
            onClick={() => setRefresh(refresh + 1)}
          >
            {t('CheckBiosPage.checkAgain')}
          </BtnSimple>
        </div>
      </div>
    </Main>
  );
}

export default CheckBios;
