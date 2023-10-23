import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';
import DeleteContact from './components/Delete';

const App = () => {
  const users = useSelector((state) => state.users);

  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h1 className="mb-4">User Management System</h1>
        <Link to="/add" className="btn btn-success">
          Add User
        </Link>
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<DeleteContact />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
