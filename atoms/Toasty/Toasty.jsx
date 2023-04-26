import React, { useRef, useState, useEffect } from "react";
import { useKonami } from 'react-konami-code';
import toastyImg from 'assets/toasty.png'
import './toasty.scss';
const Toasty = (show) => {
  const audioRef = useRef(null);

  const [state, setState] = useState({
    toasty: false
  });

  const {toasty} = state

  const toastyLoad = () => {
    setState({ ...state, toasty: true });
  }

  const playAudio = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    if (toasty===true) {
      playAudio()
      setTimeout(() => {
        setState({ ...state, toasty: false });
      }, 1600);
    }
  }, [toasty]);

  useKonami(toastyLoad);

  return (
    <>
    <audio ref={audioRef} id="myAudio" src="https://github.com/rubentd/toasty/blob/b914bc0e240ab3705f14a9a6e452b4921dccb5a5/toasty.mp3?raw=true"></audio>
    <img className={toasty === true ? 'toasty is-animated' : 'toasty'} src={toastyImg} alt="Toasty!"/>
    </>
  );
};

export default Toasty
