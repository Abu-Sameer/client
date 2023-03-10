import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './Main.css';

function Main() {
  const LOCAL = 'contacts';

  const [contacts, setContacts] = useState([]);

  function addContactHandler(contact) {
    console.log(contact);
    setContacts([...contacts, contact]); // or use this below method
    // setContacts((prev) => [(prev = contact)]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL, JSON.stringify(contacts));
  }, [contacts]);

  let call = '';
  if (contacts <= 0) {
    call = <h3>you don't have any contact list</h3>;
  }

  return (
    <div className="ui-containter">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {call || <ContactList contacts={contacts} />}
    </div>
  );
}

export default Main;
