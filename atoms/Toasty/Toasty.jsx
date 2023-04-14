import React, { useRef } from "react";
import toasty from 'assets/toasty.png'
import './toasty.scss';
const Toasty = (show) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  if (show.show===true){
    playAudio()
  }

  return (
    <>
    <audio ref={audioRef} id="myAudio" src="https://github.com/rubentd/toasty/blob/b914bc0e240ab3705f14a9a6e452b4921dccb5a5/toasty.mp3?raw=true"></audio>
    <img className={show.show === true ? 'toasty is-animated' : 'toasty no'} src={toasty} alt="Toasty!"/>
    </>
  );
};

export default Toasty
