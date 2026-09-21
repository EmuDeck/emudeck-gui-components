import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './WindowControls.scss';

function WindowControls() {
  const { t } = useTranslation();
  const [maximized, setMaximized] = useState(false);
  const platform = window.electron?.platform;
  const isFrameless = platform === 'linux' || platform === 'win32';
  const isWindows = platform === 'win32';
  const ipcChannel = window.electron?.ipcRenderer;

  useEffect(() => {
    if (!isFrameless) return undefined;
    const unsubscribe = ipcChannel.on('window-maximized', (value) => {
      setMaximized(!!value);
    });
    ipcChannel.sendMessage('window-control', ['state']);
    return unsubscribe;
  }, []);

  if (!isFrameless) return null;

  const send = (action) => ipcChannel.sendMessage('window-control', [action]);

  return (
    <div className={`window-controls window-controls--${platform}`}>
      <button
        type="button"
        className="window-controls__btn"
        aria-label={t('WindowControls.minimize')}
        title={t('WindowControls.minimize')}
        onClick={() => send('minimize')}
      >
        <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
          {isWindows ? (
            <line x1="4" y1="9" x2="14" y2="9" />
          ) : (
            <polyline points="4,7 9,12 14,7" />
          )}
        </svg>
      </button>
      <button
        type="button"
        className="window-controls__btn"
        aria-label={
          maximized ? t('WindowControls.restore') : t('WindowControls.maximize')
        }
        title={
          maximized ? t('WindowControls.restore') : t('WindowControls.maximize')
        }
        onClick={() => send('maximize')}
      >
        <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
          {isWindows && maximized && (
            <>
              <rect x="4" y="6" width="8" height="8" />
              <polyline points="6,6 6,4 14,4 14,12 12,12" />
            </>
          )}
          {isWindows && !maximized && (
            <rect x="4" y="4" width="10" height="10" />
          )}
          {!isWindows && maximized && <polygon points="9,4 14,9 9,14 4,9" />}
          {!isWindows && !maximized && <polyline points="4,11 9,6 14,11" />}
        </svg>
      </button>
      <button
        type="button"
        className="window-controls__btn window-controls__btn--close"
        aria-label={t('WindowControls.close')}
        title={t('WindowControls.close')}
        onClick={() => send('close')}
      >
        <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
          <line x1="5" y1="5" x2="13" y2="13" />
          <line x1="13" y1="5" x2="5" y2="13" />
        </svg>
      </button>
    </div>
  );
}

export default WindowControls;
