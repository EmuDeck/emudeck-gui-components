import PropTypes from 'prop-types';
import './Step.scss';

function Step({ children }) {
  return { children };
}

Step.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

Step.defaultProps = {
  children: '',
};

export default Step;
