import PropTypes from 'prop-types';
import History from './History';
import './HistoryList.css';

const HistoryList = (props) => {
  const entries = props.entries;

  return (
    <div className="HistoryList">
      <h2>Search History</h2>
      <ul>
      { entries.map((entry, i) => (
        <History
          key={i}
          entry={entry}
          />
      )) }
      </ul>
    </div>
  );
};

HistoryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })).isRequired,
};

export default HistoryList;