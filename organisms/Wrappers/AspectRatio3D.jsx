import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { ar433d, ar1693d } from 'components/utils/images/images';

function AspectRatio3D({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          toggle
          title="ratio3d"
          imgs={[
            [ar1693d, ar.classic3d !== 169 ? 'is-hidden' : ''],
            [ar433d, ar.classic3d !== 43 ? 'is-hidden' : ''],
          ]}
          enabled={ar.classic3d === 43 ? false : true}
          options={[
            [
              () => onClick(43),
              ar.classic3d === 43 ? 'is-selected' : '',
              '4:3',
              'Original Aspect Ratio',
              true,
            ],
            [
              () => onClick(169),
              ar.classic3d === 169 ? 'is-selected' : '',
              '16:9',
              ' Widescreen <br /> (Expect some graphical glitches.)',
              true,
            ],
          ]}
          details={['Dreamcast', 'Nintendo 64']}
        />
      </Main>
    </>
  );
}

AspectRatio3D.propTypes = {
  onClick: PropTypes.func,
};

AspectRatio3D.defaultProps = {
  onClick: '',
};

export default AspectRatio3D;
