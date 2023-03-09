import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
  const { name, number, email, address } = props.contact;
  return (
    <div className="cool">
      <img
        className="ui mine"
        src={user}
        alt="user"
        style={{ scale: '100%', width: '50px' }}
      />
      <div className="content"></div>
      <ul
        className="trash alternate outline icon"
        style={{
          color: 'gray',
          marginTop: '5px',
          marginBottom: '10px',
        }}
      >
        <li>Fullname: {name}</li>
        <li>Phone Number: {number}</li>
        <li>Current Address: {address}</li>
        <li>Email Address: {email}</li>
      </ul>
    </div>
  );
};

export default ContactCard;
