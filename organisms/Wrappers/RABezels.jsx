import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { imgBezels, imgNoBezels } from 'components/utils/images/images';

function RABezels({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { bezels } = state;

  return (
    <>
      <p className="lead">
        Use our pre-configured bezels to hide the vertical black bars on 8 bit
        and 16 bit games.
      </p>

      <Main>
        <SelectorMenu
          imgs={[
            [imgBezels, bezels === false ? 'is-hidden' : ''],
            [imgNoBezels, bezels === true ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(false),
              bezels === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              bezels === true ? 'is-selected' : '',
              'On',
              '',
              true,
            ],
          ]}
          details={[
            'GameBoy',
            'GameBoy Color',
            'Super Nintendo',
            'Nintendo NES',
            'Atari',
            'Master System',
            'Genesis',
            'SegaCD',
            'Sega32x',
            'GameGear',
            'NeoGeo Pocket',
          ]}
        />
      </Main>
    </>
  );
}

RABezels.propTypes = {
  onClick: PropTypes.func,
};

RABezels.defaultProps = {
  onClick: '',
};

export default RABezels;
