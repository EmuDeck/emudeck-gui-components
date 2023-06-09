import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { ar87s, ar43s } from 'components/utils/images/images';

function AspectRatioSNES({ onClick }) {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <p className="lead">
        Select the aspect ratio for the Super Nintendo Entertainment System.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [ar87s, ar.snes !== 87 ? 'is-hidden' : ''],
            [ar43s, ar.snes !== 43 ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(87),
              ar.snes === 87 ? 'is-selected' : '',
              '8:7',
              'The real SNES Resolution',
              true,
            ],
            [
              () => onClick(43),
              ar.snes === 43 ? 'is-selected' : '',
              '4:3',
              ' Default Original',
              true,
            ],
          ]}
          details={['Super Nintendo', 'Nintendo NES']}
        />
      </Main>
    </>
  );
}

AspectRatioSNES.propTypes = {
  onClick: PropTypes.func,
};

AspectRatioSNES.defaultProps = {
  onClick: '',
};

export default AspectRatioSNES;
