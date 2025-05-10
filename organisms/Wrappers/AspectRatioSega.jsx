import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { ar43, ar32 } from 'components/utils/images/images';

function AspectRatioSega({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          imgs={[
            [ar43, ar.sega !== 43 ? 'is-hidden' : ''],
            [ar32, ar.sega !== 32 ? 'is-hidden' : ''],
          ]}
          enabled={ar.sega === 43 ? false : true}
          options={[
            [
              () => onClick(43),
              ar.sega === 43 ? 'is-selected' : '',
              '4:3',
              'Original Aspect Ratio',
              true,
            ],
            [
              () => onClick(32),
              ar.sega === 32 ? 'is-selected' : '',
              '3:2',
              ' Smaller black bars, slight horizontal distortion',
              true,
            ],
          ]}
          details={['Master System', 'Genesis', 'Sega CD', 'Sega 32X']}
        />
      </Main>
    </>
  );
}

AspectRatioSega.propTypes = {
  onClick: PropTypes.func,
};

export default AspectRatioSega;
