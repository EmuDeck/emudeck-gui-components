import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { lcd3don, lcd3doff } from 'components/utils/images/images';

function Shaders3D({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          toggle
          title="shaders3D"
          imgs={[
            [lcd3don, shaders.classic3d !== true ? 'is-hidden' : ''],
            [lcd3doff, shaders.classic3d !== false ? 'is-hidden' : ''],
          ]}
          enabled={shaders.classic3d === false ? false : true}
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
