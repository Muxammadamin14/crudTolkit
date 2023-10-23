import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../UserReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (name && email) {
      dispatch(addUser({ name, email }));
      toast.success('User added successfully');
      setName('');
      setEmail('');
    } else {
      toast.error('Please enter name and email');
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddUser}>
        Add
      </button>
      <Link to="/" className="btn btn-secondary ms-2">
        Go Back
      </Link>
    </div>
  );
};

export default Add;
