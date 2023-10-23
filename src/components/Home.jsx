import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, selectUsers } from '../UserReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Home.css';
import { Button, Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
      toast.success('User deleted successfully');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container${darkMode ? ' dark-mode' : ''}`}>
      <h1 className="mb-4">Home</h1>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <Card key={user.id} className="mb-3">
            <Card.Body>
              <Card.Title>Name: {user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <div className="d-flex">
                <Link to={`/update/${user.id}`} className="btn btn-primary me-2">
                  Update
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1 className="bg-red">No users found</h1>
      )}
      <Link to="/add" className="btn btn-success">
        Add User
      </Link>
      <Button variant="secondary" className="ms-2" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
};

Home.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
