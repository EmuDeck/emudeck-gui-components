import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import { abxy, bayx } from 'components/utils/images/images';

function ControllerLayoutPage({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { controllerLayout } = state;

  return (
    <>
      <p className="lead">
        Do you want your controller set so the buttons match the position of the
        original controllers ( A is mapped to B ) or do you want to use your
        controller's layout ( A is mapped to A )
      </p>
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
              'Position Match',
              '',
              true,
            ],
            [
              () => onClick('abxy'),
              controllerLayout === 'abxy' ? 'is-selected' : '',
              'Controller Layout Match',
              '',
              true,
            ],
          ]}
          details={['Nintendo Systems']}
        />
      </Main>
    </>
  );
}

ControllerLayoutPage.propTypes = {
  onClick: PropTypes.func,
};

ControllerLayoutPage.defaultProps = {
  onClick: '',
};

export default ControllerLayoutPage;
