import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../slice/ContactSlice';

export default function AddContact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (cansave) {
      dispatch(addContact({ name, address, email, number }));
    }
    setName('');
    setAddress('');
    setEmail('');
    setNumber('');
    navigate('/');
  }
  const cansave = [name, address, email, number].every(Boolean);

  return (
    <form
      className="form-control bg-success text-light"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center">Contact Manager</h1>
      <div className="row g-3">
        <div className="col-md-6">
          <label>Full Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter your fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Entert your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label>Email Address</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary my-3">Add to list</button>
      </div>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to="/"
      >{`<== Contact list`}</Link>
    </form>
  );
}
