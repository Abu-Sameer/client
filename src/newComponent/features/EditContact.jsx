import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactById, updateContact } from '../slice/ContactSlice';

export default function EditContact() {
  const { contactId } = useParams();
  const contact = useSelector((state) => selectContactById(state, contactId));
  const [name, setName] = useState(contact?.name);
  const [address, setAddress] = useState(contact?.address);
  const [number, setNumber] = useState(contact?.number);
  const [email, setEmail] = useState(contact?.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (cansave) {
      dispatch(updateContact({ id: contact.id, name, address, number, email }));
    }
    navigate('/');
  }

  const cansave = [name, address, number, email].every(Boolean);

  return (
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
        <button className="btn btn-primary my-3 me-3">Save</button>
        <button
          onClick={() => navigate('/')}
          className="btn btn-dark my-3 ms-3"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
