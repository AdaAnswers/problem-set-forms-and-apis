import PropTypes from 'prop-types';
import './SearchResult.css';

const SearchResult = (props) => {
  const result = props.result;

  return (
    <div className="SearchResult">
      <h2>Results for: { result && result.location }</h2>
      <ul>
        <li>Latitude: { result && result.latitude }</li>
        <li>Longitude: { result && result.longitude }</li>
      </ul>
    </div>
  );
};

SearchResult.propTypes = {
  result: PropTypes.shape({
    location: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
};

export default SearchResult;