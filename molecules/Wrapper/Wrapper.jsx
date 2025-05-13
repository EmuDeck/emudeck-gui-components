import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import Aside from 'components/molecules/Aside/Aside';
import { useNavigate } from 'react-router-dom';

function Wrapper({ children, aside, css }) {
  const { state } = useContext(GlobalContext);
  const { system, second } = state;
  let showAside;
  if (aside === false) {
    showAside = false;
  } else {
    showAside = true;
  }

  if (second === false) {
    showAside = false;
  }
  const navigate = useNavigate();
  useEffect(() => {
    const showChangelog = localStorage.getItem('show_changelog');
    if (showChangelog === 'true') {
      // alert('yeah');
      navigate('/change-log');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`app ${system}`}>
      <Aside css={showAside ? '' : 'is-hidden'} />
      <div className={`wrapper ${css}`}>{children}</div>
    </div>
  );
}

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  aside: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.any,
  ]),
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};
