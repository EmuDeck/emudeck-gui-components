import './sonic.scss';

function Sonic() {
  return (
    <div className="sonic-container">
      <p className="copyright">
        Assets by{' '}
        <a
          href="https://codepen.io/acupoftee/pen/mdbqQjB"
          target="_blank"
          rel="noreferrer"
        >
          hey-nick
        </a>{' '}
        &{' '}
        <a
          href="https://codepen.io/acupoftee/pen/mdbqQjB"
          target="_blank"
          rel="noreferrer"
        >
          rpetersen29
        </a>
      </p>
      <div className="crt">
        <div className="sonic-wrapper">
          <div className="sonic" />
        </div>
        <div id="container">
          <div className="background-wrapper">
            <div className="sky-wrapper">
              <div className="sky" />
              <div className="ocean-sparkle" />
            </div>

            <div className="mountains" />
            <div className="mountains-lower" />
            <div className="tile-1" />
            <div className="tile-2" />
            <div className="tile-3" />
            <div className="tile-4" />
            <div className="tile-5" />
          </div>

          <div className="platform-wrapper">
            <div className="platform" />
            <div className="earth-tile" />
          </div>
        </div>
      </div>
      <div id="center" />
    </div>
  );
}
export default Sonic;
