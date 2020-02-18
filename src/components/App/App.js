/* eslint-disable no-alert */
import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import './App.scss';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.setState({
      contacts,
    });
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  setContacts = (name, number) => {
    const { contacts } = this.state;
    let test = '';
    contacts.some(item => {
      if (item.name === name) {
        // eslint-disable-next-line no-return-assign
        return (test = name);
      }
      if (item.number === number) {
        // eslint-disable-next-line no-return-assign
        return (test = number);
      }
      return false;
    });

    if (test) return alert(`${test} is already exist`);

    const newContacts = [...contacts];

    newContacts.push({
      id: shortid(),
      name,
      number,
    });
    this.setState({
      contacts: newContacts,
    });

    return true;
  };

  handlerDrop = id => {
    const { state } = this;
    const contacts = state.contacts.filter(item => item.id !== id);

    this.setState({
      contacts,
    });
  };

  setFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const items = contacts.filter(item =>
      String(item.name)
        .toLowerCase()
        .includes(filter.toLowerCase()),
    );
    return (
      <div className="wrapper">
        <h1 className="h1">Phonebook</h1>
        <ContactForm setContacts={this.setContacts} />
        {!!contacts.length && (
          <Filter filter={filter} onFilter={this.setFilter} />
        )}
        <ContactList items={items} onDelete={this.handlerDrop} />
      </div>
    );
  }
}
