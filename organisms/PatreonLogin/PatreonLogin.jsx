import React, { useEffect, useState, useContext, useRef } from 'react';
import { GlobalContext } from 'context/globalContext';
import { useNavigate } from 'react-router-dom';

//
// components
//
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Main from 'components/organisms/Main/Main';
import Header from 'components/organisms/Header/Header';

//
// hooks
//
import useFetch from 'renderer/hooks/useFetch';

//
// imports & requires
//
const branchFile = require('data/branch.json');

const { branch } = branchFile;

function PatreonLogin({ children }) {
  //
  // i18
  //

  //
  // States
  //

  const [statePage, setStatePage] = useState({
    patreonClicked: false,
    status: null,
    accessAllowed: false,
    patreonTokenTemp: null,
    errorMessage: undefined,
    dom: undefined,
  });
  const {
    patreonClicked,
    status,
    accessAllowed,
    patreonTokenTemp,
    errorMessage,
    dom,
  } = statePage;

  const { state, setState, setStateCurrentConfigs } = useContext(GlobalContext);

  const {
    installEmus,
    overwriteConfigEmus,
    achievements,
    shaders,
    patreonToken,
  } = state;

  //
  // Web services
  //
  const patreonWS = useFetch('check.php');
  //
  // Const & Vars
  //
  const navigate = useNavigate();
  const ipcChannel = window.electron.ipcRenderer;
  //
  // Functions
  //
  const patreonShowInput = () => {
    setStatePage({
      ...statePage,
      patreonClicked: true,
    });
  };

  const goToPatreon = () => {
    navigate('/early-access');
  };

  const patreonSetToken = (data) => {
    let patronTokenValue;

    data.target.value === ''
      ? (patronTokenValue = null)
      : (patronTokenValue = data.target.value);

    setStatePage({
      ...statePage,
      patreonTokenTemp: patronTokenValue,
    });
  };

  const patreonCheckToken = (tokenArg) => {
    const settingsStorage = JSON.parse(
      localStorage.getItem('settings_emudeck')
    );

    let token;
    let system = 'NA';
    let device = 'NA';
    let installEmus = 'NA';

    if (settingsStorage) {
      system = settingsStorage.system;
      device = settingsStorage.device;
      installEmus = settingsStorage.installEmus;
    }

    if (!tokenArg) {
      token = patreonTokenTemp;
    } else {
      token = tokenArg;
    }

    patreonWS
      .post({ token, system, device, installEmus })
      .then((data) => {
        const patreonJson = data;

        if (patreonJson.error) {
          setStatePage({
            ...statePage,
            status: null,
            patreonClicked: false,
            errorMessage: patreonJson.error,
          });
          return;
        }

        if (patreonJson.cancel) {
          setStatePage({
            ...statePage,
            accessAllowed: 'cancel',
          });
          return;
        }

        // eslint-disable-next-line promise/always-return
        if (patreonJson.status === true) {
          setStatePage({
            ...statePage,
            patreonTokenTemp: patreonJson.new_token,
            accessAllowed: true,
          });
        }
      })
      .catch((error) => {
        setStatePage({
          ...statePage,
          status: null,
          patreonClicked: false,
        });
      });
  };

  //
  // UseEffects
  //
  useEffect(() => {
    const patreonTokenTempLS = localStorage.getItem('patreon_token');
    patreonCheckToken(patreonTokenTempLS);
  }, []);

  useEffect(() => {
    if (accessAllowed === true) {
      localStorage.setItem('patreon_token', patreonTokenTemp);
      const partial = patreonTokenTemp.split('|||');
      const splitToken = partial[1];

      ipcChannel.sendMessage('emudeck', [
        `storePatreonToken|||storePatreonToken ${splitToken}`,
      ]);
      ipcChannel.once('storePatreonToken', (message) => {
        setState({
          ...state,
          patreonToken: splitToken,
        });
      });
    } else if (accessAllowed === 'cancel') {
      const updateOrLogin = confirm(
        'Please log back in to Patreon to keep EmuDeck updated. Press OK to log in again or Cancel to continue with no updates'
      );
      if (!updateOrLogin) {
        const settingsStorage = JSON.parse(
          localStorage.getItem('settings_emudeck')
        );
        const shadersStored = settingsStorage.shaders;
        const overwriteConfigEmusStored = settingsStorage.overwriteConfigEmus;
        const achievementsStored = settingsStorage.achievements;

        delete settingsStorage.installEmus.primehacks;
        delete settingsStorage.installEmus.cemunative;
        delete settingsStorage.overwriteConfigEmus.primehacks;
        const installEmusStored = settingsStorage.installEmus;

        // Theres probably a better way to do this...

        ipcChannel.sendMessage('version');

        ipcChannel.once('version-out', (version) => {
          ipcChannel.sendMessage('system-info-in');
          ipcChannel.once('system-info-out', (platform) => {
            console.log({
              system: platform,
              version: version[0],
              gamemode: version[1],
            });
            setState({
              ...state,
              ...settingsStorage,
              installEmus: { ...installEmus, ...installEmusStored },
              overwriteConfigEmus: {
                ...overwriteConfigEmus,
                ...overwriteConfigEmusStored,
              },
              achievements: {
                ...achievements,
                ...achievementsStored,
              },
              shaders: { ...shaders, ...shadersStored },
              system: platform,
              version: version[0],
              gamemode: version[1],
              branch,
            });
          });
        });
      }
    }
  }, [accessAllowed]);

  useEffect(() => {
    if (patreonToken !== null) {
      navigate('/check-updates');
    }
  }, [patreonToken]);
  useEffect(() => {
    window.reload;
  }, [patreonTokenTemp]);

  // useEffect(() => {
  //   if (state.version != '') {
  //     navigate('/welcome');
  //   }
  // }, [state]);

  //
  // Render
  //
  if (accessAllowed) {
    return <div>{children}</div>;
  }
  return (
    <div>
      <Header title="Early Access Feature" />
      <Main>
        <p className="lead">
          You need to log into patreon in order to access this feature while
          it's being tested on our Early Access branch.
        </p>

        {!!errorMessage && branch.includes('early') && (
          <p className="lead">{errorMessage}</p>
        )}

        {!patreonClicked &&
          branch !== 'early' &&
          branch !== 'early-unstabled' && (
            <BtnSimple
              css="btn-simple--3"
              type="button"
              target="_blank"
              aria="Check Early Access features"
              onClick={() => goToPatreon()}
            >
              Check Early Access features
            </BtnSimple>
          )}

        {patreonClicked && (
          <div className="form">
            <FormInputSimple
              label="Token"
              type="token"
              name="token"
              id="token"
              value={patreonTokenTemp}
              onChange={patreonSetToken}
            />
            {patreonTokenTemp !== null && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Next"
                onClick={() => patreonCheckToken()}
              >
                {status === null && 'Check Token'}
                {status === 'checking' && 'Checking token...'}
              </BtnSimple>
            )}
          </div>
        )}
      </Main>
    </div>
  );
}

export default PatreonLogin;
