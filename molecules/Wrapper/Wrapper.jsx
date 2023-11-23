import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Aside from 'components/molecules/Aside/Aside';

function Wrapper({ children, data }) {
  const { state, setState } = useContext(GlobalContext);
  const { system } = state;

  return (
    <div className={`app ${system}`}>
      {data && <Aside data={data} />}
      {!data && <Aside />}
      <div className="wrapper">{children}</div>
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
};

Wrapper.defaultProps = {
  children: '',
};
