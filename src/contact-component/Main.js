import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  const LOCAL = 'contact';
  const [contacts, setContacts] = useState([]);

  function addContactHandler(contact) {
    setContacts([...contacts, { id: nanoid(), contact }]); // or use this below method
    // setContacts((prev) => [(prev = contact)]);
  }

  function deletehandler(id) {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContact);
  }

  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(LOCAL));
    if (retrive) setContacts(retrive);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL, JSON.stringify(contacts));
  }, [contacts]);

  // let call = '';
  // if (contacts <= 0) {
  //   call = <h3>you don't have any contact list</h3>;
  // }

  return (
    <div className="ui-containter">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path="/list"
            element={
              <ContactList deletehandler={deletehandler} contacts={contacts} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
