import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function ESDETheme({ onClick, themes }) {
  const { state } = useContext(GlobalContext);

  const { themeESDE } = state;

  return (
    <>
      <p className="lead">
        Please select your default theme. You'll be able to install additional
        themes later in Manage Emulators.
      </p>
      <Main css="main--horizontal-scroll">
        <div className="cards cards--maxi">
          {themes && (
            <>
              {Object.values(themes.themes).map((item) => {
                const { name, screenshots, author, url, reponame } = item;
                const systemView = `https://gitlab.com/es-de/themes/themes-list/-/raw/master/${screenshots[0].image}?ref_type=heads`;
                const gamelistView = `https://gitlab.com/es-de/themes/themes-list/-/raw/master/${screenshots[1].image}?ref_type=heads`;
                // eslint-disable-next-line consistent-return

                return (
                  <Card
                    css={url === themeESDE[0] && 'is-selected'}
                    key={name}
                    onClick={() => onClick([url, reponame])}
                  >
                    <img src={systemView} alt={name} />
                    <img className="fade" src={gamelistView} alt={name} />
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

ESDETheme.propTypes = {
  onClick: PropTypes.func,
};

ESDETheme.defaultProps = {
  onClick: '',
};

export default ESDETheme;
