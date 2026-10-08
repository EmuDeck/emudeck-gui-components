import { useState } from 'react';
import { BtnSimple } from 'getbasecore/Atoms';
import tvImage from 'assets/end.jpg';
import './metroCop.scss';

function MetroCop({
  fullscreen = false,
  message = '',
  buttonText = '',
  onButtonClick = null,
  onPowerChange = () => {},
}) {
  const [power, setPower] = useState(false);

  // Toggles the TV and notifies the parent
  const togglePower = () => {
    setPower(!power);
    onPowerChange(!power);
  };

  const frame = (
    <iframe
      className="metro-cop__frame"
      title="Metro Cop"
      src="emudeck-media://assets/games/metro-cop/index.html"
      allow="autoplay; fullscreen"
    />
  );
  return (
    <div className={`metro-cop ${fullscreen ? 'metro-cop--fullscreen' : 'metro-cop--tv'}`}>
      <div className="metro-cop__screen">
        {fullscreen ? (
          frame
        ) : (
          <div className="metro-cop__tv">
            <img className="metro-cop__tv-image" src={tvImage} alt="" />
            {power ? (
              frame
            ) : (
              <div className="metro-cop__frame metro-cop__frame--off" />
            )}
            <div className="metro-cop__display">
              <div className="metro-cop__data">
                <p className="metro-cop__message">
                  <span>{message}</span>
                </p>
                {buttonText && (
                  <BtnSimple
                    css="btn-simple--tv"
                    type="button"
                    aria={buttonText}
                    onClick={onButtonClick}
                  >
                    {buttonText}
                  </BtnSimple>
                )}
                <BtnSimple
                  css="btn-simple--tv"
                  type="button"
                  aria="Power"
                  onClick={togglePower}
                >
                  <span className={`metro-cop__led${power ? ' is-on' : ''}`} />
                  {power ? 'OFF' : 'ON'}
                </BtnSimple>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="metro-cop__credits">
        <a
          href="https://badcomputer0.itch.io/metro-cop"
          target="_blank"
          rel="noreferrer"
        >
          Metro Cop · <strong>Bad Computer</strong>
        </a>
        {!fullscreen && (
          <>
            {' · '}
            <a
              href="https://github.com/soqueroeu/Soqueroeu-TV-Backgrounds_V2.0"
              target="_blank"
              rel="noreferrer"
            >
              TV · <strong>Soqueroeu</strong>
            </a>
          </>
        )}
      </p>
    </div>
  );
}

export default MetroCop;
