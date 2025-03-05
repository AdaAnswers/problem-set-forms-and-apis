import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const DEFAULT_STATE = {
  location: '',
};
  
const SearchForm = ({ onLocationSubmit }) => {
  const [formValues, setFormValues] = useState(DEFAULT_STATE);

  const textInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormValues(current => {
      return { ...current, [fieldName]: value };
    });
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    onLocationSubmit(formValues.location);
  };

  return (
    <div className="SearchForm">
      <form onSubmit={formSubmitted}>
        <input type="text" name="location" value={formValues.location} onInput={textInput} />
        <input type="submit" value="Search Now!" />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onLocationSubmit: PropTypes.func.isRequired,
};

export default SearchForm;