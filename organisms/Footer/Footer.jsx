import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BtnSimple } from 'getbasecore/Atoms';

import './Footer.scss';

function Footer({
  back,
  next,
  third,
  fourth,
  fourthText,
  disabledNext,
  disabledBack,
  nextText,
  backText,
  thirdText,
  exit,
}) {
  const navigate = useNavigate();
  const goTo = (href) => {
    navigate(`/${href}`);
  };

  const CloseApp = () => {
    window.close();
  };

  return (
    <footer className="footer">
      {exit && (
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Go Back"
          disabled={disabledNext && true}
          onClick={() => CloseApp()}
        >
          Exit To Gaming Mode
        </BtnSimple>
      )}
      {!!fourth && (
        <BtnSimple
          css="btn-simple--2"
          type="button"
          onClick={() => CloseApp()}
          aria="Go Back"
        >
          {fourthText}
        </BtnSimple>
      )}
      {!!third && (
        <BtnSimple
          css="btn-simple--2"
          type="button"
          onClick={() => goTo(third)}
          aria="Go Back"
        >
          {thirdText}
        </BtnSimple>
      )}
      {back !== false && (
        <BtnSimple
          css="btn-simple--2"
          type="button"
          onClick={back ? () => goTo(back) : () => navigate(-1)}
          aria="Go Back"
          disabled={disabledBack && true}
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
          disabled={disabledNext && true}
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
            />
          </svg>
        </BtnSimple>
      )}
    </footer>
  );
}

Footer.propTypes = {
  back: PropTypes.any,
  next: PropTypes.bool,
  third: PropTypes.string,
  fourth: PropTypes.string,
  fourthText: PropTypes.string,
  disabledNext: PropTypes.bool,
  disabledBack: PropTypes.bool,
  nextText: PropTypes.string,
  backText: PropTypes.string,
  thirdText: PropTypes.string,
  exit: PropTypes.string,
};
Footer.defaultProps = {
  back: '',
  next: false,
  third: '',
  fourth: '',
  fourthText: '',
  disabledNext: false,
  disabledBack: false,
  nextText: '',
  backText: '',
  thirdText: '',
  exit: '',
};

export default Footer;
