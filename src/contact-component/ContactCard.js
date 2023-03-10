import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
  const { name, number, email, address } = props.contact;
  return (
    <div className="contact-card">
      <img className="ui mine" src={user} alt="user" />
      <div className="content"></div>
      <ul>
        <li>Fullname: {name}</li>
        <li>Phone Number: {number}</li>
        <li>Current Address: {address}</li>
        <li>Email Address: {email}</li>
      </ul>
    </div>
  );
};

export default ContactCard;
