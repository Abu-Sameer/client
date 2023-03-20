import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function AddContact(props) {
  const [state, setState] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
  });

  function handleChange(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      state.name === '' ||
      state.number === '' ||
      state.email === '' ||
      state.address === ''
    ) {
      alert('All values are Mondatory!');
      return;
    }

    props.addContactHandler(state);
    setState({ name: '', email: '', number: '', address: '' });
  }

  return (
    <div className="ui-main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Full Name</label>
          <input
            className="name"
            required
            type="text"
            name="name"
            placeholder="Enter your fullname"
            value={state.name}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="text"
            name="number"
            required
            placeholder="Phone Number"
            value={state.number}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            required
            name="address"
            placeholder="Entert your address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email Address</label>
          <input
            type="text"
            required
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <Link to="/list">
          <button className="ui button purple">Add to list</button>
        </Link>
      </form>
    </div>
  );
}
