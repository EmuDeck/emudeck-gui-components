import PropTypes from 'prop-types';
import './Main.scss';

function Main({ children, css }) {
  return <main className={css}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.oneOfType([PropTypes.string]),
};

Main.defaultProps = {
  children: '',
  css: '',
};

export default Main;
