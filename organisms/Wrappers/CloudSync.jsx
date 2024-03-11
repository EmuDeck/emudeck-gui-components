import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { none, backup, sync } from 'components/utils/images/images';

function CloudSync({ onClick, showNone }) {
  const { state } = useContext(GlobalContext);
  const { cloudSyncType, system } = state;
  return (
    <>
      <p className="lead">Select your preferred type of cloud saving.</p>
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
              'Sync',
              'Sync between EmuDeck installations - <strong> Patrons only</strong>',
              true,
            ],
            [
              () => onClick('Save'),
              cloudSyncType === 'Save' ? 'is-selected' : '',
              'Backup',
              'Backup your games to the cloud',
              true,
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

CloudSync.defaultProps = {
  showNone: false,
  onClick: '',
};

export default CloudSync;
