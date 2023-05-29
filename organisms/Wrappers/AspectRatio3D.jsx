import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { ar433d, ar1693d } from 'components/utils/images/images';

function AspectRatio3D({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <p className="lead">
        Select the aspect ratio for the Dreamcast and Nintendo 64 Systems.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [ar1693d, ar.classic3d !== 169 ? 'is-hidden' : ''],
            [ar433d, ar.classic3d !== 43 ? 'is-hidden' : ''],
          ]}
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
              ' Widescreen using Widescreen hacks <br /> (Expect some graphical glitches.)',
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
