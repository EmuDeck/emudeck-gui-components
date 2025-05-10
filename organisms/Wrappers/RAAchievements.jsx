import { useTranslation } from 'react-i18next';
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import {
  BtnSimple,
  FormInputSimple,
  BtnSwitch,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';
import Main from 'components/organisms/Main/Main';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import { raLogo } from 'components/utils/images/images';

function RAAchievements({ onChange, onToggle }) {
  const { t, i18n } = useTranslation();
  const { state, setState } = useContext(GlobalContext);
  const { achievements, second } = state;
  const { token } = achievements;

  const [statePage, setStatePage] = useState({
    modal: undefined,
  });
  const { modal } = statePage;

  const ipcChannel = window.electron.ipcRenderer;
  const fetchToken = () => {
    ipcChannel.sendMessage('getToken', {
      user: achievements.user,
      pass: achievements.pass,
    });

    ipcChannel.once('getToken', (error, stdout) => {
      const messageJson = JSON.parse(stdout);

      if (messageJson.Success) {
        // Second time? We can set everything from here - Used in the settings page
        if (second) {
          ipcChannel.sendMessage('setToken', [
            messageJson.Token,
            achievements.user,
          ]);
          ipcChannel.once(
            'setToken',
            (errorToken, stdoutToken, stderrToken) => {
              console.log({ errorToken, stdoutToken, stderrToken });
            }
          );
        }

        setState({
          ...state,
          achievements: { ...achievements, token: messageJson.Token },
        });
      } else {
        const modalData = {
          active: true,
          header: (
            <span className="h4">
              {t('RAAchievements.modalWrongPassTitle')}
            </span>
          ),
          body: <p>{t('RAAchievements.modalWrongPassDesc')}</p>,
          css: 'emumodal--xs',
        };
        setStatePage({ ...statePage, modal: modalData });
      }
    });
  };

  const resetToken = () => {
    setState({
      ...state,
      achievements: { ...achievements, token: '' },
    });
  };

  useEffect(() => {
    if (achievements.token !== '') {
      ipcChannel.sendMessage('emudeck-legacy', [
        `setAchievementToken|||RetroArch_retroAchievementsSetLogin;DuckStation_retroAchievementsSetLogin;PCSX2QT_retroAchievementsSetLogin;PPSSPP_retroAchievementsSetLogin; echo "true"`,
      ]);
      ipcChannel.once('setAchievementToken', (message) => {
        let modalData;
        console.log(message.stdout.includes('true'));
        if (message.stdout.includes('true')) {
          if (achievements.hardcore) {
            ipcChannel.sendMessage('emudeck-legacy', [
              `setHardcore|||RetroArch_retroAchievementsHardCoreOn;DuckStation_retroAchievementsHardCoreOn;PCSX2QT_retroAchievementsHardCoreOn;PPSSPP_retroAchievementsHardCoreOn; echo "true"`,
            ]);
          } else {
            ipcChannel.sendMessage('emudeck-legacy', [
              `setHardcore|||RetroArch_retroAchievementsHardCoreOff;DuckStation_retroAchievementsHardCoreOff;PCSX2QT_retroAchievementsHardCoreOff;PPSSPP_retroAchievementsHardCoreOff; echo "false"`,
            ]);
          }
        } else {
          modalData = {
            active: true,
            header: (
              <span className="h4">{t('RAAchievements.modalErrorTitle')}</span>
            ),
            body: <p>{t('RAAchievements.modalErrorDesc')}</p>,
            css: 'emumodal--xs',
          };
        }
        setStatePage({ ...statePage, modal: modalData });
      });
    }
  }, [achievements]);

  useEffect(() => {
    ipcChannel.sendMessage('saveSettings', [JSON.stringify(state)]);
  }, [token]);

  return (
    <>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            <Form>
              {achievements.token === '' && (
                <>
                  <p>
                    {t('RAAchievements.register')}{' '}
                    <LinkSimple
                      css="link-simple--1"
                      target="_blank"
                      href="https://www.retroAchievements.org"
                    >
                      RetroAchievements.org
                    </LinkSimple>
                  </p>
                  <div
                    style={{
                      width: '40%',
                      display: 'inline-block',
                      marginRight: '10px',
                    }}
                  >
                    <FormInputSimple
                      label="Username"
                      type="text"
                      name="user"
                      id="user"
                      value={achievements.user}
                      onChange={onChange}
                    />
                  </div>
                  <div style={{ width: '50%', display: 'inline-block' }}>
                    <FormInputSimple
                      label="Password"
                      type="password"
                      name="pass"
                      id="pass"
                      value={achievements.pass}
                      onChange={onChange}
                    />
                  </div>
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    onClick={fetchToken}
                  >
                    {t('general.login')}
                  </BtnSimple>
                </>
              )}
              {achievements.token !== '' && (
                <>
                  <p>
                    <span className="h4">{t('RAAchievements.success')}</span>
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      onClick={resetToken}
                    >
                      {t('RAAchievements.reset')}
                    </BtnSimple>
                  </p>

                  <div>
                    HardCore mode
                    <BtnSwitch
                      label="hardcore"
                      name="hardcore"
                      id="hardcore"
                      value={achievements.hardcore}
                      onChange={onToggle}
                      checked={!!achievements.hardcore}
                    />
                  </div>
                </>
              )}
            </Form>
          </div>
          <div data-col-sm="5">
            <img src={raLogo} alt="RetroAchievements" />
          </div>
          <div data-col-sm="1" />
        </div>
        <EmuModal modal={modal} />
      </Main>
    </>
  );
}

RAAchievements.propTypes = {
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

RAAchievements.defaultProps = {
  onChange: '',
  onToggle: '',
};

export default RAAchievements;
