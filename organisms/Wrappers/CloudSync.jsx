import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { none, backup, sync } from 'components/utils/images/images';

function CloudSync({ onClick, showNone }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { cloudSyncType, system, branch } = state;
  return (
    <>
      <Main>
        <SelectorMenu
          imgs={[
            [sync, cloudSyncType !== 'Sync' ? 'is-hidden' : ''],
            [backup, cloudSyncType !== 'Save' ? 'is-hidden' : ''],
            [none, cloudSyncType !== 'none' ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick('Sync'),
              cloudSyncType === 'Sync' ? 'is-selected' : '',
              t('CloudSync.sync'),
              t('CloudSync.syncDesc'),
              true,
            ],
            [
              () => onClick('Save'),
              cloudSyncType === 'Save' ? 'is-selected' : '',
              t('CloudSync.backup'),
              t('CloudSync.backupDesc'),
              !branch.includes('early'),
            ],
          ]}
          details={['All']}
        />
      </Main>
    </>
  );
}

CloudSync.propTypes = {
  showNone: PropTypes.string,
  onClick: PropTypes.func,
};

export default CloudSync;
