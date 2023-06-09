import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { noir1, modern1, rbsimple1 } from 'components/utils/images/images';

function PegasusTheme({ onClick }) {
  const { state } = useContext(GlobalContext);
  const { theme } = state;
  return (
    <>
      <p className="lead">
        Choose your theme for EmulationStation DE, swipe to see more
        screenshots.
      </p>
      <Main>
        <SelectorMenu
          imgs={[
            [noir1, theme !== 'EPICNOIR' ? 'is-hidden' : ''],
            [modern1, theme !== 'MODERN-DE' ? 'is-hidden' : ''],
            [rbsimple1, theme !== 'RBSIMPLE-DE' ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick('EPICNOIR'),
              theme === 'EPICNOIR' ? 'is-selected' : '',
              'Epic Noir',
              '',
              true,
            ],
            [
              () => onClick('RBSIMPLE-DE'),
              theme === 'RBSIMPLE-DE' ? 'is-selected' : '',
              'RB Simple',
              '',
              true,
            ],
            [
              () => onClick('MODERN-DE'),
              theme === 'MODERN-DE' ? 'is-selected' : '',
              'Modern',
              '',
              true,
            ],
          ]}
        />
      </Main>
    </>
  );
}

PegasusTheme.propTypes = {
  onClick: PropTypes.func,
};

PegasusTheme.defaultProps = {
  onClick: '',
};

export default PegasusTheme;
