import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return (
    <div className="app">
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
