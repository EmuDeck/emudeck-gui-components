import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { lcdon, lcdoff } from 'components/utils/images/images';

function Shaders2D({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      <p className="lead">
        The CRT Shader gives your classic systems a faux retro CRT vibe.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [lcdon, shaders.classic !== true ? 'is-hidden' : ''],
            [lcdoff, shaders.classic !== false ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(false),
              shaders.classic === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              shaders.classic === true ? 'is-selected' : '',
              'On',
              ' ',
              true,
            ],
          ]}
          details={[
            'Atari',
            'Master System',
            'Genesis',
            'SegaCD',
            'Sega32x',
            'Nes',
            'SuperNes',
          ]}
        />
      </Main>
    </>
  );
}

Shaders2D.propTypes = {
  onClick: PropTypes.func,
};

Shaders2D.defaultProps = {
  onClick: '',
};

export default Shaders2D;
