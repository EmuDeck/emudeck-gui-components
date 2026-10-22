import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';
import { useFetchCond } from 'hooks/useFetchCond';

import './store-login.scss';

function StoreLogin({ onLogin = () => {}, onClose = () => {} }) {
  const { t } = useTranslation();
  const [stateLogin, setStateLogin] = useState({
    email: '',
    code: '',
    step: 'email',
    error: '',
    loading: false,
  });
  const { email, code, step, error, loading } = stateLogin;
  const loginCodeWS = useFetchCond(
    'https://store.emudeck.com/rest/login-code.php',
  );

  const onChange = (e) => {
    setStateLogin({ ...stateLogin, [e.target.name]: e.target.value, error: '' });
  };

  const setError = (text) => {
    setStateLogin((prev) => ({ ...prev, error: text, loading: false }));
  };

  // Asks the store to email a 6-digit login code
  const requestCode = () => {
    setStateLogin({ ...stateLogin, loading: true, error: '' });
    loginCodeWS
      .post({ action: 'request', email })
      .then((data) => {
        if (data.status !== 'success') {
          setError(t('StorePage.loginError'));
          return;
        }
        setStateLogin((prev) => ({ ...prev, step: 'code', loading: false }));
      })
      .catch(() => setError(t('StorePage.loginError')));
  };

  // Exchanges the emailed code for the user token
  const verifyCode = () => {
    setStateLogin({ ...stateLogin, loading: true, error: '' });
    loginCodeWS
      .post({ action: 'verify', email, code })
      .then((data) => {
        if (data.status !== 'success' || !data.token) {
          setError(t('StorePage.invalidCode'));
          return;
        }
        onLogin(data.token);
      })
      .catch(() => setError(t('StorePage.loginError')));
  };

  const submit = (e) => {
    e.preventDefault();
    if (step === 'email') {
      requestCode();
    } else {
      verifyCode();
    }
  };

  return (
    <Form css="store-login" onSubmit={submit}>
      {step === 'email' ? (
        <>
          <p>{t('StorePage.loginEmail')}</p>
          <FormInputSimple
            key="email"
            label={t('StorePage.email')}
            type="email"
            name="email"
            id="store-login-email"
            value={email}
            onChange={onChange}
          />
        </>
      ) : (
        <>
          <p>{t('StorePage.codeSent', { email })}</p>
          <FormInputSimple
            key="code"
            label={t('StorePage.code')}
            type="text"
            name="code"
            id="store-login-code"
            value={code}
            onChange={onChange}
          />
        </>
      )}
      {error && <p className="store-login__error">{error}</p>}
      <div className="store-login__actions">
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria={step === 'email' ? t('StorePage.sendCode') : t('StorePage.verify')}
          disabled={loading || (step === 'email' ? !email : code.length !== 6)}
          onClick={step === 'email' ? requestCode : verifyCode}
        >
          {step === 'email' ? t('StorePage.sendCode') : t('StorePage.verify')}
        </BtnSimple>
        <BtnSimple
          css="btn-simple--3"
          type="button"
          aria={t('general.cancel')}
          onClick={onClose}
        >
          {t('general.cancel')}
        </BtnSimple>
      </div>
    </Form>
  );
}

StoreLogin.propTypes = {
  onLogin: PropTypes.func,
  onClose: PropTypes.func,
};

export default StoreLogin;
