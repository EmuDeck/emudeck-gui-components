import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { lcd3don, lcd3doff } from 'components/utils/images/images';

function Shaders3D({ onClick }) {
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
            [lcd3don, shaders.classic3d !== true ? 'is-hidden' : ''],
            [lcd3doff, shaders.classic3d !== false ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(false),
              shaders.classic3d === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              shaders.classic3d === true ? 'is-selected' : '',
              'On',
              ' ',
              true,
            ],
          ]}
          details={['Playstation 1', 'Dreamcast', 'Saturn', 'Nintendo 64']}
        />
      </Main>
    </>
  );
}

Shaders3D.propTypes = {
  onClick: PropTypes.func,
};

Shaders3D.defaultProps = {
  onClick: '',
};

export default Shaders3D;
