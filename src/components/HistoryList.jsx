import PropTypes from 'prop-types';
import History from './History';
import { ResultType } from '../types';
import './HistoryList.css';

const HistoryList = ({ entries }) => {
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
  entries: PropTypes.arrayOf(ResultType).isRequired,
};

export default HistoryList;