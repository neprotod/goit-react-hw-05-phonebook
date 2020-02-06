import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = ({ filter, onFilter }) => {
  return (
    <div className="filter">
      <h4>Find people</h4>
      <input type="text" value={filter} onChange={onFilter} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
