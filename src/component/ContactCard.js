import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
  const { name, number, email } = props.contact;
  return (
    <div className="cool">
      <img
        className="ui mine"
        src={user}
        alt="user"
        style={{ scale: '100%', width: '50px' }}
      />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div style={{ marginTop: '-15px' }}>{number}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: 'red',
          marginTop: '5px',
          marginBottom: '10px',
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
