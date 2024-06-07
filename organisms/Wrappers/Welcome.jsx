import { useTranslation } from 'react-i18next';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import PropTypes from 'prop-types';
import { Alert } from 'getbasecore/Molecules';
import Card from 'components/molecules/Card/Card';
import CardSettings from 'components/molecules/CardSettings/CardSettings';
import Banner from 'components/molecules/Banner/Banner';
import { Iframe } from 'getbasecore/Atoms';
import { useNavigate, Link } from 'react-router-dom';
import StoreGame from 'components/molecules/StoreGame/StoreGame';

const welcomeItems = require('data/welcome.json');
import {
  iconChecker,
  iconCloud,
  iconCompress,
  iconGear,
  iconList,
  iconMigrate,
  iconPlugin,
  iconPrize,
  iconUninstall,
  iconQuick,
  iconCustom,
  iconDoc,
  iconJoystick,
  iconPackage,
  iconDisk,
  iconHelp,
  iconScreen,
  iconAndroid,
} from 'components/utils/images/icons';

function Welcome({ onClick, alert, alertCSS, functions, updates }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { mode, second, system, gamemode } = state;

  const setStatus = (status) => {
    if (!status) {
      return false;
    }
    if (status === 'disabled') {
      return 'is-disabled';
    }
    if (status.includes('early')) {
      return 'is-early';
    }
    return true;
  };

  return (
    <>
      <Main>
        {/*
              First install screen
            */}
        {second === false && (
          <div className="container--grid">
            <div data-col-sm="5">
              <CardSettings
                css={mode === 'easy' && 'is-highlighted'}
                btnCSS="btn-simple--1"
                icon={iconQuick}
                iconSize="md"
                title="Easy Mode"
                button="Select"
                onClick={() => onClick('easy')}
                description=" This mode automatically installs and configures your device
					with our recommended settings so you can start playing right
					away. Recommended if you are new to emulation."
              />
            </div>

            <div data-col-sm="5">
              <CardSettings
                css={mode === 'expert' && 'is-highlighted'}
                btnCSS="btn-simple--1"
                icon={iconCustom}
                iconSize="md"
                title="Custom Mode"
                button="Select"
                onClick={() => onClick('expert')}
                description="This mode allows you to customize your EmuDeck install. Configure Aspect Ratios, Bezels, Filters, RetroAchievements,Emulators, Frontends, and more. Recommended for advanced users."
              />
            </div>
            <div data-col-sm="5">
              <CardSettings
                btnCSS="btn-simple--1"
                icon={iconPackage}
                iconSize="md"
                title="Android"
                button="Install"
                onClick={() => onClick('android')}
                description=" Install EmuDeck ( beta ) on your Android device."
              />
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
