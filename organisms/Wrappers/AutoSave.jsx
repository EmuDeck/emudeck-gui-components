import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import { saveon, saveoff } from 'components/utils/images/images';

function AutoSave({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { autosave } = state;

  return (
    <>
      <p className="lead">
        If enabled, your game state will be saved on exit and automatically
        loaded when opened again when using RetroArch.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [saveoff, autosave === true ? 'is-hidden' : ''],
            [saveon, autosave === false ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(false),
              autosave === false ? 'is-selected' : '',
              'Off',
              '',
              true,
            ],
            [
              () => onClick(true),
              autosave === true ? 'is-selected' : '',
              'On',
              '',
              true,
            ],
          ]}
          details={[
            'Atari',
            'GameBoy & GameBoy Color',
            'GameBoy Advance',
            'Super Nintendo',
            'Nintendo NES',
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

AutoSave.propTypes = {
  onClick: PropTypes.func,
};

AutoSave.defaultProps = {
  onClick: '',
};

export default AutoSave;
