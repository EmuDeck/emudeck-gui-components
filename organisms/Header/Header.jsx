import React, { useContext, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import Toasty from 'components/atoms/Toasty/Toasty';

import './Header.scss';
import flagEN from 'assets/flags/en.svg';
import flagES from 'assets/flags/es.svg';

function HeaderElectron({ title, bold }) {
  // const { t, i18n } = useTranslation();
  const { state, setState } = useContext(GlobalContext);
  const { debug, version, branch, command } = state;
  const ipcChannel = window.electron.ipcRenderer;

  let lngs = {
    en: {
      nativeName: (
        <img className="header__flag" width="12" src={flagEN} alt="English" />
      ),
    },
    es: {
      nativeName: (
        <img className="header__flag" width="12" src={flagES} alt="Spanish" />
      ),
    },
  };
  lngs = '';

  const toggleDebug = (e) => {
    switch (e.detail) {
      case 2:
        setState({
          ...state,
          debug: !debug,
        });
        break;
      default:
        break;
    }
  };

  const moreZoom = () => {
    ipcChannel.sendMessage('moreZoom');
  };
  const lessZoom = () => {
    ipcChannel.sendMessage('lessZoom');
  };

  const runCommand = () => {
    const idMessage = Math.random();
    ipcChannel.sendMessage('emudeck', [`${idMessage}|||${command}`]);
    ipcChannel.once(idMessage, (message) => {
      
    });
  };
  const saveCommand = (e) => {
    setState({ ...state, command: e.target.value });
  };

  useEffect(() => {
    if (debug === true) {
      ipcChannel.sendMessage('debug');
    }
  }, [debug, ipcChannel]);

  // Xmas
  const d = new Date();
  const month = d.getMonth();
  const snowFlakes = [];

  if (month === 11) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 150; i++) {
      snowFlakes.push(<div className="snow" />);
    }
  }

  return (
    <header className="header">
      <Toasty />
      {month === 11 && snowFlakes && snowFlakes}
      <button type="button" onClick={toggleDebug} className="header__version">
        <small>{version}</small>
      </button>
      <div className="header__accesibility">
        <BtnSimple
          css="btn-simple--4"
          type="button"
          aria="Zoom In"
          onClick={moreZoom}
        >
          A+
        </BtnSimple>
        <BtnSimple
          css="btn-simple--4"
          type="button"
          aria="Zoom Out"
          onClick={lessZoom}
        >
          A-
        </BtnSimple>
        {/* {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))} */}
      </div>

      {branch !== 'main' && (
        <div className={`header__badge header__${branch}`}> {branch}</div>
      )}

      {!debug && (
        <h1 className="h2">
          {title} <span>{bold}</span>
        </h1>
      )}
      {debug && (
        <div className="form">
          <FormInputSimple
            label="Test your Command"
            type="text"
            name="command"
            id="command"
            onChange={saveCommand}
            value={command}
          />
          <button
            onClick={runCommand}
            className="btn-simple btn-simple--1"
            type="button"
          >
            Test command
          </button>
          <br />
        </div>
      )}
    </header>
  );
}

HeaderElectron.propTypes = {
  title: PropTypes.string.isRequired,
  bold: PropTypes.string,
};
HeaderElectron.defaultProps = {
  bold: '',
};

export default HeaderElectron;
