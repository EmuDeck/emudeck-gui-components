import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import bgImg from 'assets/nbg.gif';
import './Aside.scss';

const Aside = ({ props }) => {
  const { state, setState } = useContext(GlobalContext);
  const { debug } = state;
  const ipcChannel = window.electron.ipcRenderer;

  const toggleDebug = () => {
    setState({
      ...state,
      debug: !debug,
    });
  };

  useEffect(() => {
    if (debug === true) {
      ipcChannel.sendMessage('debug');
    }
  }, [debug]);

  return (
    <aside>
      <div className="aside-debug" onClick={toggleDebug}></div>
      <img src={bgImg} alt="Background" />
    </aside>
  );
};

export default Aside;
