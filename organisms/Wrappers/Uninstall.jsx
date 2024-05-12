import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function Uninstall({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <br />
        <div>
          <a
            href="https://discord.gg/b9F7GpXtFP"
            aria-label="Go Next"
            className="btn-simple btn-simple--1"
            target="_blank"
            rel="noreferrer"
          >
            EmuDeck's Discord
          </a>
          <a
            href="https://www.reddit.com/r/EmuDeck/"
            aria-label="Go Next"
            className="btn-simple btn-simple--1"
            target="_blank"
            rel="noreferrer"
          >
            EmuDeck's Reddit
          </a>
        </div>
        <p className="lead">
          I know what I am doing, I would like to uninstall EmuDeck.
        </p>
        <BtnSimple
          css="btn-simple--3"
          type="button"
          onClick={() => onClick()}
          aria="Go Next"
        >
          Uninstall EmuDeck
        </BtnSimple>
      </Main>
    </>
  );
}

Uninstall.propTypes = {
  onClick: PropTypes.func,
};

Uninstall.defaultProps = {
  onClick: '',
};

export default Uninstall;
