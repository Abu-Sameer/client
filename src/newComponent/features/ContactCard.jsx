import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../slice/ContactSlice';
import { useNavigate } from 'react-router-dom';

export default function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="col-md-6">
      <div className="card h-100 pb-3 bg-light">
        <div className="px-2 py-2">
          <img src={user} alt="user" width="10%" />
          <i
            onClick={() => dispatch(deleteContact(contact.id))}
            className="fa-solid fa-trash-can text-danger float-end"
          ></i>
          <i
            onClick={() => navigate(`contact/${contact.id}`)}
            className="fa-solid fa-file-pen text-secondary me-2 float-end"
          ></i>
        </div>
        <div className="card-content ps-2">
          <div>
            Fullname: <span className="fw-bold">{contact.name} </span>
          </div>
          <div>
            Phone Number: <span className="fw-bold">{contact.number} </span>
          </div>
          <div>
            Current Address: <span className="fw-bold">{contact.address} </span>
          </div>
          <div>
            Email Address: <span className="fw-bold">{contact.email} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
