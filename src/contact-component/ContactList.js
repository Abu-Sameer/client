import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  return (
    <div className="contact-map">
      <h3>Contact Added</h3>
      <div>
        {props.contacts.map((contact) => {
          return <ContactCard key={contact} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
