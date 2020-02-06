import React from 'react';
import PropTypes from 'prop-types';

import './ContactList.scss';

const ContactList = ({ items, onDelete }) => {
  // eslint-disable-next-line react/prop-types
  const list = items.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
        <button className="button" type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul className="contact-list">{list}</ul>;
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
