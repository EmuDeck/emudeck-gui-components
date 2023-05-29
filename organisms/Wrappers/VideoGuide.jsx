import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { Iframe } from 'getbasecore/Atoms';

function VideoGuide({ onClick, minute }) {
  return (
    <>
      <p className="lead">
        Learn how to set up EmuDeck with this wonderful guide from Russ at
        RetroGameCorps.
      </p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="7">
            <Iframe
              src={`https://www.youtube-nocookie.com/embed/rs9jDHIDKkUstart=${minute}&autoplay=${
                minute !== 0 ? 1 : 0
              }&modestbranding=1&rel=0&showinfo=0`}
            />
          </div>
          <div data-col-sm="5">
            <span className="h4">Sections</span>
            <ol className="list">
              <li className="h6">
                <button type="button" onClick={() => onClick(76)}>
                  Introduction
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(159)}>
                  Written Guide and Recommended Tools
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(229)}>
                  Installing EmuDeck
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(402)}>
                  Configuring Games and BIOS Files
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(553)}>
                  Configuring Steam ROM Manager
                </button>{' '}
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(657)}>
                  EmuDeck Tools and New Features
                </button>
              </li>
              <li className="h6">
                <button type="button" onClick={() => onClick(810)}>
                  Quick Tips and Tricks
                </button>
              </li>
            </ol>
          </div>
        </div>
      </Main>
      z
    </>
  );
}

VideoGuide.propTypes = {
  minute: PropTypes.string,
  onClick: PropTypes.func,
};

VideoGuide.defaultProps = {
  minute: '',
  onClick: '',
};

export default VideoGuide;
