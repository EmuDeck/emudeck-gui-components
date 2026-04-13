import React, { useRef, useState, useEffect } from 'react';
import { useKonami } from 'react-konami-code';
import toastyImg from 'assets/toasty.png';
import './toasty.scss';

// Se crea UNA sola vez cuando el módulo se importa por primera vez
const audio = new Audio(
  'https://github.com/rubentd/toasty/blob/b914bc0e240ab3705f14a9a6e452b4921dccb5a5/toasty.mp3?raw=true',
);

const Toasty = (show) => {
  const [toasty, setToasty] = useState(false);

  const toastyLoad = () => setToasty(true);

  useEffect(() => {
    if (toasty) {
      audio.currentTime = 0; // Por si se activa varias veces seguidas
      audio.play();
      const timer = setTimeout(() => setToasty(false), 1600);
      return () => clearTimeout(timer); // Cleanup por si el componente desmonta
    }
  }, [toasty]);

  useKonami(toastyLoad);

  return (
    <>
      <img
        className={toasty ? 'toasty is-animated' : 'toasty'}
        src={toastyImg}
        alt="Toasty!"
      />
    </>
  );
};

export default Toasty;
