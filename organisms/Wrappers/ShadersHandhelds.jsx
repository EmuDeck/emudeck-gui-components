import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import { lcdonH, lcdoffH } from 'components/utils/images/images';

function ShadersHandhelds({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      <p className="lead">
        The LCD Shader simulates the old LCD Matrix screens of handheld systems.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [lcdoffH, shaders.handhelds === true ? 'is-hidden' : ''],
            [lcdonH, shaders.handhelds === false ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(false),
              shaders.handhelds === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              shaders.handhelds === true ? 'is-selected' : '',
              'On',
              ' ',
              true,
            ],
          ]}
          details={['GameBoy', 'GameBoy Color', 'GameGear', 'NeoGeo Pocket']}
        />
      </Main>
    </>
  );
}

ShadersHandhelds.propTypes = {
  onClick: PropTypes.func,
};

ShadersHandhelds.defaultProps = {
  onClick: '',
};

export default ShadersHandhelds;
