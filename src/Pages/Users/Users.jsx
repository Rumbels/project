import Button from '@mui/joy/Button';

import './Users.css'
import { Link } from 'react-router-dom';
import { CreateUserModal } from '../../components/CreateUserModal/CreateUserModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/userSlice';
import RemoveUserModal from '../../components/RemoveUserModal/RemoveUserModal';
import { useState } from 'react';
import { selectIsOpenCreateModal, toggleOpenCreateModal } from '../../store/createUserSlice';
import { logOut } from '../../store/authSlice';

export default function Users () {

    const data = useSelector(selectAllUsers);
    const isOpenCreateUser = useSelector(selectIsOpenCreateModal);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onDeleteUser = (id) => {
        setIsOpen(true);
        setUserId(id);
    }

    const userLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Destroy</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id[0]}...</td>
                            <td>{user.name}</td>
                            <td>{user.pass}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/users/${user.id}`}>view Profile</Link></td>
                            <td><Button onClick={() => onDeleteUser(user.id)} size="sm" color="danger">X</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="nav-block">
                <button onClick={() => dispatch(toggleOpenCreateModal())}>Create a new User</button>
                <button onClick={userLogOut}>Log out</button>
            </div>
            {isOpen && <RemoveUserModal setIsOpen={setIsOpen} userId={userId} />}
            {isOpenCreateUser && <CreateUserModal />}
        </div>

        
    )
}