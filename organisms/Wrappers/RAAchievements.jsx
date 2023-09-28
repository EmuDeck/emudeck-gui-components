import React, { useContext, useState } from 'react';
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
  const { state, setState } = useContext(GlobalContext);
  const { achievements, second } = state;

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
          header: <span className="h4">Wrong username or password</span>,
          body: (
            <p>
              If your password contains special characters like _ or ' you need
              to change it on retroachievements.org
            </p>
          ),
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

  return (
    <>
      <p className="lead">
        RetroAchievements.org is a community led effort to collaborate and
        create custom-made achievements in emulated classic games. Enter your
        account information to set up RetroAchievements for Duckstation, PCSX2,
        and RetroArch.
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            <Form>
              {achievements.token === '' && (
                <>
                  <p>
                    If you do not have an account, register now on
                    RetroAchievements.org by clicking{' '}
                    <LinkSimple
                      css="link-simple--1"
                      target="_blank"
                      href="https://www.retroAchievements.org"
                    >
                      here
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
                    Login
                  </BtnSimple>
                </>
              )}
              {achievements.token !== '' && (
                <>
                  <p>
                    <span className="h4">
                      You are successfully logged to RetroAchivements!
                    </span>
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      onClick={resetToken}
                    >
                      Reset Login
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
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={raLogo} alt="RetroAchievements" />
          </div>
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
