import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import bgImg from 'assets/bg.gif';
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
      <video className="aside-bg" autoplay loop>
        <source src="https://github.com/EmuDeck/emudeck-electron/blob/main/src/assets/bg.mp4?raw=true" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </aside>
  );
};

export default Aside;
