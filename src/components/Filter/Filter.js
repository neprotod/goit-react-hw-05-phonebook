import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = ({ filter, onFilter }) => {
  return (
    <div className="filter">
      <div className="input_block">
        <label htmlFor="found_input">
          <i className="fa fa-search" />
        </label>
        <input
          id="found_input"
          type="text"
          value={filter}
          onChange={onFilter}
          placeholder="Find people"
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
