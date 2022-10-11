import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import './Header.scss';
const Header = ({ title, bold }) => {
  const { state, setState, command } = useContext(GlobalContext);
  const { debug, debugText, version, branch } = state;
  const ipcChannel = window.electron.ipcRenderer;

  const toggleDebug = () => {
    setState({
      ...state,
      debug: !debug,
    });
  };

  const moreZoom = () => {
    ipcChannel.sendMessage('moreZoom');
  };
  const lessZoom = () => {
    ipcChannel.sendMessage('lessZoom');
  };

  const runCommand = () => {
    let command = state.command;
    const idMessage = Math.random();
    ipcChannel.sendMessage('emudeck', [`${idMessage}|||${command}`]);
    ipcChannel.once(idMessage, (message) => {
      console.log(message);
    });
  };
  const saveCommand = (e) => {
    setState({ ...state, command: e.target.value });
  };

  return (
    <header className="header">
      <small onClick={toggleDebug} className="header__version">
        {version}
      </small>
      <div class="header__accesibility">
        <button className="btn-simple btn-simple--4" onClick={moreZoom}>
          A+
        </button>
        <button className="btn-simple btn-simple--4" onClick={lessZoom}>
          A-
        </button>
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

export default Header;
