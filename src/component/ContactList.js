import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  return (
    <div className="ui celled list">
      <div>
        {props.contacts.map((contact) => {
          return <ContactCard key={contact} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
