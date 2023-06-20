import React, { useState } from 'react';
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../slice/ContactSlice';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(contact?.name);
  const [address, setAddress] = useState(contact?.address);
  const [number, setNumber] = useState(contact?.number);
  const [email, setEmail] = useState(contact?.email);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (cansave) {
      dispatch(updateContact({ name, address, number, email }));
    }
    setEdit(false);
  }

  const cansave = [name, address, number, email].every(Boolean);

  return (
    <>
      {edit ? (
        <form
          className="form-control bg-success text-light"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center">Edit Contact</h1>
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
            <button className="btn btn-primary my-3">Save</button>
          </div>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/"
          >{`<== Contact list`}</Link>
        </form>
      ) : (
        <div className="col-md-6">
          <div className="card h-100 pb-3 bg-light">
            <div className="px-2 py-2">
              <img src={user} alt="user" width="10%" />
              <i
                onClick={() => dispatch(deleteContact(contact.id))}
                className="fa-solid fa-trash-can text-danger float-end"
              ></i>
              <i
                onClick={() => setEdit(true)}
                className="fa-solid fa-file-pen text-secondary me-2 float-end"
              ></i>
            </div>
            <div className="card-content ps-2">
              <div>
                Fullname: <span className="fw-bold">{name} </span>
              </div>
              <div>
                Phone Number: <span className="fw-bold">{number} </span>
              </div>
              <div>
                Current Address: <span className="fw-bold">{address} </span>
              </div>
              <div>
                Email Address: <span className="fw-bold">{email} </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;
