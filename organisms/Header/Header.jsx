import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';
import './Header.scss';

const HeaderElectron = ({ title, bold }) => {
  const { state, setState, command } = useContext(GlobalContext);
  const { debug, version, branch } = state;
  const ipcChannel = window.electron.ipcRenderer;

  const toggleDebug = (e) => {
    switch (e.detail) {
      case 2:
        setState({
          ...state,
          debug: !debug,
        });
        break;
      default:
        console.log('click');
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
      console.log(message);
    });
  };
  const saveCommand = (e) => {
    setState({ ...state, command: e.target.value });
  };

  useEffect(() => {
    if (debug === true) {
      ipcChannel.sendMessage('debug');
    }
  }, [debug]);

  // Xmas
  const d = new Date();
  const month = d.getMonth();
  const snowFlakes = [];

  if (month === 11) {
    for (let i = 0; i < 150; i++) {
      snowFlakes.push(<div className="snow"></div>);
    }
  }

  return (
    <header className="header">
      {month === 11 && snowFlakes && snowFlakes}
      <small onClick={toggleDebug} className="header__version">
        {version}
      </small>
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
      </div>

      {branch === 'beta' && <div className="header__beta"> {branch}</div>}
      {!debug && (
        <h1 className="h2">
          {title} <span>{bold}</span>
        </h1>
      )}
      {debug && (
        <Form>
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
        </Form>
      )}
    </header>
  );
};

export default HeaderElectron;

HeaderElectron.propTypes = {
  title: PropTypes.string.isRequired,
  bold: PropTypes.string,
};
HeaderElectron.defaultProps = {
  bold: '',
};
