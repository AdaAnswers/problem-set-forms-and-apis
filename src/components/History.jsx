import { ResultType } from '../types';
import './History.css';

const History = ({ entry }) => {
  return (
    <li className="History">
      <h3>{ entry.location }</h3>
      <span className="lat">Latitude: { entry.latitude }</span>
      <span className="lon">Longitude: { entry.longitude }</span>
    </li>
  );
};

History.propTypes = {
  entry: ResultType.isRequired,
};

export default History;