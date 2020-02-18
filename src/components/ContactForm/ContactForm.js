/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joi from '@hapi/joi';

import ErrorMessage from '../ErrorMessage';

import './ContactForm.scss';

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Zа-яА-Я ]*$/, 'name')
    .required()
    .messages({
      'string.base': `"Name" should be a type of 'text'`,
      'string.empty': `"Name" cannot be an empty field`,
      'string.min': `"Name" should have a minimum length of {#limit}`,
      'string.max': `"Name" should have a maximum length of {#limit}`,
      'string.pattern.name': `"Name" we can use only alphanum`,
      'any.required': `"Name" is a required field`,
    }),

  number: Joi.string()
    .pattern(/^([0-9]+?[ -]?)+?[0-9]$/)
    .message(
      "Number isn't correct, please use only number and separator space or -",
    )
    .required(),
});

export default class ContactForm extends Component {
  static propTypes = {
    setContacts: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    error: '',
  };

  resetState() {
    this.setState({
      name: '',
      number: '',
      error: '',
    });
  }

  changeInput = e => {
    const { state } = this;
    const stateName = String(e.target.name).toLowerCase();

    if (state[stateName] === undefined)
      throw new Error(`No state ${stateName} in ContactForm`);

    this.setState({
      [stateName]: e.target.value,
    });
  };

  onSubmit = e => {
    const { name, number } = this.state;
    const { setContacts } = this.props;
    e.preventDefault();

    if (!name || !number) {
      return false;
    }
    const result = schema.validate({ name, number });
    if (result.error) {
      this.setState({
        error: result.error.message,
      });
      return false;
    }

    setContacts(name, number);
    this.resetState();

    return true;
  };

  render() {
    const { name, number, error } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div>
          <label>
            <div className="label">Name</div>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.changeInput}
            />
          </label>
          <label>
            <div className="label">Number</div>
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.changeInput}
            />
          </label>
        </div>
        <button className="button" type="submit">
          Add contact
        </button>
        <ErrorMessage message={error} />
      </form>
    );
  }
}
