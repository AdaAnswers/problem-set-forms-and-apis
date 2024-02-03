import PropTypes from 'prop-types';
import './History.css';

const History = (props) => {
  const entry = props.entry;

  return (
    <li className="History">
      <h3>{ entry.location }</h3>
      <span className="lat">Latitude: { entry.latitude }</span>
      <span className="lon">Longitude: { entry.longitude }</span>
    </li>
  );
};

History.propTypes = {
  entry: PropTypes.shape({
    location: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default History;