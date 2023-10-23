import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../UserReducer';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const user = users.find((user) => user.id === id);

  const handleUpdateUser = () => {
    if (name && email) {
      dispatch(updateUser({ id, name, email }));
      toast.success('User updated successfully');
    } else {
      toast.error('Please enter name and email');
    }
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container">
      <h1 className="mb-4">Update User</h1>
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
      <button className="btn btn-primary" onClick={handleUpdateUser}>
        Update
      </button>
      <Link to="/" className="btn btn-secondary ms-2">
        Go Back
      </Link>
    </div>
  );
};

export default Update;
