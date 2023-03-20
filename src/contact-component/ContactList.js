import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  function handledel(id) {
    props.deletehandler(id);
  }

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Adesoye',
  //     email: 'Adesoye@gmail.com',
  //   },
  // ];
  return (
    <div className="contact-map">
      <h3>
        Contact Added
        <Link to="/">
          <button className="btn">Add Contact</button>
        </Link>
      </h3>
      <div>
        {props.contacts.map((contact) => {
          return (
            <ContactCard
              handledel={handledel}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
