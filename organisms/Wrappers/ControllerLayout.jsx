import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import { abxy, bayx } from 'components/utils/images/images';

function ControllerLayoutPage({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { controllerLayout } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          imgs={[
            [abxy, controllerLayout === 'baxy' ? 'is-hidden' : ''],
            [bayx, controllerLayout === 'abxy' ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick('baxy'),
              controllerLayout === 'baxy' ? 'is-selected' : '',
              'A=B',
              t('ControllerLayout.option1'),
              true,
            ],
            [
              () => onClick('abxy'),
              controllerLayout === 'abxy' ? 'is-selected' : '',
              'A=A',
              t('ControllerLayout.option2'),
              true,
            ],
          ]}
          details={['Nintendo']}
        />
      </Main>
    </>
  );
}

ControllerLayoutPage.propTypes = {
  onClick: PropTypes.func,
};

export default ControllerLayoutPage;
