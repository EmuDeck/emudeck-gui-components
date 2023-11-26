import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Aside from 'components/molecules/Aside/Aside';

function Wrapper({ children, data, aside, css }) {
  const { state } = useContext(GlobalContext);
  const { system, second } = state;
  let showAside;
  if (aside === false) {
    showAside = false;
  } else {
    showAside = true;
  }

  if (second && aside === false) {
    showAside = false;
  }

  return (
    <div className={`app ${system} `}>
      {data && <Aside css={showAside ? '' : 'is-hidden'} data={data} />}
      {!data && <Aside css={showAside ? '' : 'is-hidden'} />}
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
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  aside: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

Wrapper.defaultProps = {
  children: '',
  aside: true,
  css: '',
};
