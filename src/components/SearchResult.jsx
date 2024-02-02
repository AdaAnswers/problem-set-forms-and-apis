import { ResultType } from '../types';
import './SearchResult.css';

const SearchResult = ({ result }) => {
  return (
    <div className="SearchResult">
      <h2>Results for: { result?.location }</h2>
      <ul>
        <li>Latitude: { result?.latitude }</li>
        <li>Longitude: { result?.longitude }</li>
      </ul>
    </div>
  );
};

SearchResult.propTypes = {
  result: ResultType,
};

export default SearchResult;