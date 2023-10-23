import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../UserReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DeleteContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const user = users.find((user) => user.id === id);

  const handleDeleteUser = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteUser(id));
      toast.success('User deleted successfully');
      navigate('/');
    }
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>Delete Contact</h1>
      <p>Are you sure you want to delete this contact?</p>
      <button onClick={handleDeleteUser}>Delete</button>
    </div>
  );
};

export default DeleteContact;
