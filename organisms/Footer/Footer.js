import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSimple } from 'getbasecore/Atoms';

import './Footer.scss';

const Footer = ({
  back,
  next,
  disabledNext,
  disabledBack,
  nextText,
  backText,
}) => {
  const navigate = useNavigate();
  const goTo = (href) => {
    navigate('/' + href);
  };
  return (
    <footer className="footer">
      {back !== false && (
        <BtnSimple
          css="btn-simple--2"
          type="button"
          onClick={ back ?  () => goTo(back) : () => navigate(-1) }
          aria="Go Back"
          disabled={disabledBack && 'true'}
        >
          {!backText && 'Go Back'}
          {backText}
        </BtnSimple>
      )}

      {next && (
        <BtnSimple
          css="btn-simple--1"
          type="button"
          onClick={() => goTo(next)}
          aria="Go Next"
          disabled={disabledNext && 'true'}
        >
          {!nextText && 'Continue '}
          {nextText}
          <svg
            className="rightarrow"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"
            ></path>
          </svg>
        </BtnSimple>
      )}
    </footer>
  );
};

export default Footer;
