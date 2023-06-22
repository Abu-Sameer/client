import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((store) => store.contacts);

  return (
    <div className="bg-success rounded p-3 mb-5">
      <Link
        style={{ color: 'white', textDecoration: 'none' }}
        to="contact"
      >{`==> Goto Contact Form`}</Link>
      <h2 className="text-center text-light">Contact Card</h2>
      <>
        {contacts < 1 ? (
          <h1 className="text-light text-center">No Contact...!</h1>
        ) : (
          <div className="row g-2">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default ContactList;
