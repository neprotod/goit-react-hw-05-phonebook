import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './ContactList.scss';
import './transitions/slide.scss';

const ContactList = ({ items, onDelete }) => {
  // eslint-disable-next-line react/prop-types
  const list = items.map(({ id, name, number }) => {
    return (
      <CSSTransition key={id} timeout={200} classNames="animate">
        <li className="list_li">
          <div className="cell left">
            <div className="name_info">
              <span className="name">{name}</span>
            </div>
            <div className="number_info">
              <span className="number">{number}</span>
            </div>
          </div>
          <div className="cell right">
            <button
              className="button drop fa fa-trash-o"
              type="button"
              onClick={() => onDelete(id)}
            />
          </div>
        </li>
      </CSSTransition>
    );
  });
  return (
    <TransitionGroup component="ul" className="contact-list">
      {list}
    </TransitionGroup>
  );
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
