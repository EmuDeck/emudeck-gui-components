import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import PropTypes from 'prop-types';
import { Alert } from 'getbasecore/Molecules';
import Card from 'components/molecules/Card/Card';
import CardSettings from 'components/molecules/CardSettings/CardSettings';

function Welcome({
  onClick,
  alert,
  alertCSS,
  functions,
  settingsCards,
  settingsCardsFeatured,
  updates,
}) {
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
            Second install screen
          */}
        {second === true && <p className="lead">Quick actions:</p>}
        {second === true && (
          <>
            <div className="container--grid">
              {settingsCardsFeatured.map((item) => {
                if (item.status === false) {
                  return;
                }

                return (
                  <div data-col-sm="3" key={item.title}>
                    <CardSettings
                      css="is-highlighted"
                      icon={item.icon[0]}
                      iconSize="md"
                      title={item.title}
                      button={item.button}
                      btnCSS={item.btnCSS}
                      onClick={item.function}
                      description={item.description}
                      type={item.type}
                      href={item.href}
                    />
                  </div>
                );
              })}
            </div>

            <hr />
            <div className="container--grid">
              {settingsCards.map((item) => {
                if (item.status === false) {
                  return;
                }
                if (item.status === 'separator') {
                  return (
                    <div key={item.title}>
                      <p className="lead">{item.title}:</p>
                      <hr />
                    </div>
                  );
                }

                return (
                  <div data-col-sm="3" key={item.title}>
                    <CardSettings
                      css={setStatus(item.status)}
                      icon={item.icon[0]}
                      iconSize="sm"
                      title={item.title}
                      button={item.button}
                      btnCSS={item.btnCSS}
                      onClick={item.function}
                      description={item.description}
                      type={item.type}
                      href={item.href}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}

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
                <span className="h3">
                  {second === false && 'Easy Mode'}
                  {second === true && 'Quick Update'}
                </span>
                <p>
                  {second === false &&
                    'This mode automatically installs and configures your device with our recommended settings so you can start playing right away.'}
                  {second === true &&
                    'This mode automatically updates EmuDeck in one click. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
                </p>
              </Card>
            </div>

            <div data-col-sm="5">
              <Card
                css={mode === 'expert' && 'is-selected'}
                onClick={() => onClick('expert')}
              >
                <span className="h3">
                  {second === false && 'Custom Mode'}
                  {second === true && 'Custom Update'}
                </span>
                <p>
                  {second === false &&
                    'This mode allows you to customize how EmuDeck installs to your system. Configure Aspect Ratios, Bezels, Filters, RetroAchievments, Emulators, EmulationStation-DE themes, and Cloud Saves.'}
                  {second === true &&
                    'This mode allows you to customize how EmuDeck updates. New settings will be applied and new emulators will be installed. If you ran custom mode previously, you will retain any choices made. Customizations made, excluding per-game settings, will be overwritten.'}
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
