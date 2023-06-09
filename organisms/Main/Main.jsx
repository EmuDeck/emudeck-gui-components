import PropTypes from 'prop-types';
import './Main.scss';

function Main({ children }) {
  return <main>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

Main.defaultProps = {
  children: '',
};

export default Main;
