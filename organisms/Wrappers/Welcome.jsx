import React, { useContext, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import PropTypes from 'prop-types';
import { Alert } from 'getbasecore/Molecules';
import Card from 'components/molecules/Card/Card';
import Banner from 'components/molecules/Banner/Banner';
import { Iframe } from 'getbasecore/Atoms';
import { useNavigate, Link } from 'react-router-dom';
import StoreGame from 'components/molecules/StoreGame/StoreGame';

const welcomeItems = require('data/welcome.json');

function Welcome({ onClick, alert, alertCSS, functions, updates }) {
  const { state } = useContext(GlobalContext);
  const { mode, second, system, gamemode } = state;

  const setStatus = (status) => {
    if (!status) {
      return false;
    }
    if (status === 'disabled') {
      return 'is-disabled';
    }
    if (status === 'early') {
      return 'is-early';
    }
    return true;
  };

  return (
    <>
      {second === false && (
        <p className="lead">Select how you want to set up your device:</p>
      )}

      <Main>
        {/*
              First install screen
            */}
        {second === false && (
          <div className="container--grid">
            <div data-col-sm="5">
              <Card
                css={mode === 'easy' && 'is-selected'}
                onClick={() => onClick('easy')}
              >
                <span className="h3">{second === false && 'Easy Mode'}</span>
                <p>
                  {second === false &&
                    'This mode automatically installs and configures your device with our recommended settings so you can start playing right away. Recommended if you are new to emulation.'}
                </p>
              </Card>
            </div>

            <div data-col-sm="5">
              <Card
                css={mode === 'expert' && 'is-selected'}
                onClick={() => onClick('expert')}
              >
                <span className="h3">{second === false && 'Custom Mode'}</span>
                <p>
                  {second === false &&
                    'This mode allows you to customize your EmuDeck install. Configure Aspect Ratios, Bezels, Filters, RetroAchievements, Emulators, Frontends, and more. Recommended for advanced users.'}
                </p>
              </Card>
            </div>
          </div>
        )}
      </Main>
    </>
  );
}

Welcome.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
  onClick: PropTypes.func,
};

Welcome.defaultProps = {
  children: '',
  css: '',
  onClick: '',
};

export default Welcome;
