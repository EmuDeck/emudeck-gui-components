import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function PegasusTheme({ onClick, themes }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);

  const { themePegasus } = state;

  return (
    <>
      <p className="lead">Select your default theme.</p>
      <Main css="main--horizontal-scroll">
        <div className="cards cards--maxi">
          {themes && (
            <>
              {Object.values(themes).map((item) => {
                const { name, screenshots, url, author } = item;

                // eslint-disable-next-line consistent-return

                return (
                  <Card
                    css={url === themePegasus[0] && 'is-selected'}
                    key={name}
                    onClick={() => onClick([url, name])}
                  >
                    <img src={screenshots[0]} alt={name} />
                    <img className="fade" src={screenshots[1]} alt={name} />
                    <span className="h6">
                      {name} by {author}
                    </span>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </Main>
    </>
  );
}

PegasusTheme.propTypes = {
  onClick: PropTypes.func,
  themes: PropTypes.object,
};

PegasusTheme.defaultProps = {
  onClick: '',
  themes: {},
};

export default PegasusTheme;
