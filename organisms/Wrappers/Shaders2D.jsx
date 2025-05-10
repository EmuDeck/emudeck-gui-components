import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import { lcdon, lcdoff } from 'components/utils/images/images';

function Shaders2D({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          toggle
          title="Shaders2D"
          imgs={[
            [lcdon, shaders.classic !== true ? 'is-hidden' : ''],
            [lcdoff, shaders.classic !== false ? 'is-hidden' : ''],
          ]}
          enabled={shaders.classic === false ? false : true}
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

export default Shaders2D;
