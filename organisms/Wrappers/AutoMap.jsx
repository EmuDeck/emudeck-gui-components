import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { mapoff, mapon } from 'components/utils/images/images';

function AutoMap({ onClick, automap }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  console.log({ automap });
  return (
    <>
      <Main>
        <SelectorMenu
          toggle
          title="AutoMap Controls"
          imgs={[
            [mapon, automap === false ? 'is-hidden' : ''],
            [mapoff, automap === true ? 'is-hidden' : ''],
          ]}
          enabled={automap === false ? false : true}
          options={[
            [
              () => onClick(false),
              automap === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              automap === true ? 'is-selected' : '',
              'On',
              '',
              true,
            ],
          ]}
          details={['Nintedo Wii', 'Nintendo GameCube', 'Nintendo Switch']}
        />
      </Main>
    </>
  );
}

export default AutoMap;
