export default {
  /**
   * Set contacts to local storage
   *
   * @param {Array} contacts
   */
  setContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },

  /**
   * Get contacts from local storage
   *
   * @return {Array}
   */
  getContacts() {
    return JSON.parse(localStorage.getItem('contacts') || '[]');
  },
};
