import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import PropTypes from 'prop-types';
import { Alert } from 'getbasecore/Molecules';
import Card from 'components/molecules/Card/Card';
import CardSettings from 'components/molecules/CardSettings/CardSettings';

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

      {updates && (
        <p className="lead">
          You have pending updates in Manage Emulators, it's recommended to
          update so you have the latest version of EmuDeck's configurations and
          optimizations for your emulators.
        </p>
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
                    'This mode automatically installs and configures your device with our recommended settings so you can start playing right away.'}
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
                    'This mode allows you to customize how EmuDeck installs to your system. Configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, EmulationStation-DE themes, and Cloud Saves.'}
                </p>
              </Card>
            </div>
          </div>
        )}

        {alert && (
          <>
            <br />
            <div className="container--grid">
              <div data-col-sm="10">
                <Alert css={alertCSS}>
                  <div dangerouslySetInnerHTML={{ __html: alert }} />
                </Alert>
              </div>
            </div>
          </>
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
