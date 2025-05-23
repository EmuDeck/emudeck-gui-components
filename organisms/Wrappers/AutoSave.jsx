import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import { saveon, saveoff } from 'components/utils/images/images';

function AutoSave({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { autosave } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          toggle
          title="AutoSave"
          imgs={[
            [saveoff, autosave === true ? 'is-hidden' : ''],
            [saveon, autosave === false ? 'is-hidden' : ''],
          ]}
          enabled={autosave === false ? false : true}
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
