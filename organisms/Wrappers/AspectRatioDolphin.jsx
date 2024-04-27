import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import Main from 'components/organisms/Main/Main';

import { ar43gc, ar169gc } from 'components/utils/images/images';

function AspectRatioDolphin({ onClick }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      <Main>
        <SelectorMenu
          imgs={[
            [ar169gc, ar.dolphin !== 169 ? 'is-hidden' : ''],
            [ar43gc, ar.dolphin !== 43 ? 'is-hidden' : ''],
          ]}
          options={[
            [
              () => onClick(43),
              ar.dolphin === 43 ? 'is-selected' : '',
              '4:3',
              'Original Aspect Ratio',
              true,
            ],
            [
              () => onClick(169),
              ar.dolphin === 169 ? 'is-selected' : '',
              '16:9',
              ' Widescreen using Widescreen hacks <br /> (Expect some graphical glitches.)',
              true,
            ],
          ]}
          details={['Gamecube']}
        />
      </Main>
    </>
  );
}

AspectRatioDolphin.propTypes = {
  onClick: PropTypes.func,
};

AspectRatioDolphin.defaultProps = {
  onClick: '',
};

export default AspectRatioDolphin;
