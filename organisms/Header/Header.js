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
  const { debug, debugText } = state;
  const ipcChannel = window.electron.ipcRenderer;

  const runCommand = () => {
    let command = state.command;
    const idMessage= Math.random();
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
        <br/>
      </Form>


      )}
    </header>
  );
};

export default Header;
