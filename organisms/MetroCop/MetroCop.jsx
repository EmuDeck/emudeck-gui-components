import './metroCop.scss';

function MetroCop({ fullscreen = false }) {
  return (
    <div className={`metro-cop${fullscreen ? ' metro-cop--fullscreen' : ''}`}>
      <iframe
        className="metro-cop__frame"
        title="Metro Cop"
        src="emudeck-media://assets/games/metro-cop/index.html"
        allow="autoplay; fullscreen"
      />
      <p className="metro-cop__credits">
        <a
          href="https://badcomputer0.itch.io/metro-cop"
          target="_blank"
          rel="noreferrer"
        >
          Metro Cop · <strong>Bad Computer</strong>
        </a>
      </p>
    </div>
  );
}

export default MetroCop;
