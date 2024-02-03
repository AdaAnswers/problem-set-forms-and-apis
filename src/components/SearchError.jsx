import PropTypes from 'prop-types';
import './SearchError.css';

const SearchError = (props) => {
  const error = props.error;

  if (!error) {
    return null;
  }

  return (
      <div className="Error">
        <h2>Uh oh! Error!</h2>
        <p>{ error }</p>
      </div>
  );
};

SearchError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default SearchError;