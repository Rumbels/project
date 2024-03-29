import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import './AuthForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Users from '../Users/Users';
import { logIn } from '../../store/authSlice';

export default function AuthForm() {

    const data = useSelector(selectAllUsers);
    let navigate = useNavigate()
    const [user, setUser] = useState({name:'', pass:'', email:''})
    const dispatch =useDispatch();

    const onChangeHandler = (value, prop) => {
        setUser({...user, [prop]: value})
    }

    const onLogin = () => {

        let currentUser = data.find(obj => obj.name === user.name && obj.pass === user.pass && obj.email === user.email);
        if(currentUser) {
            dispatch(logIn(user));
            navigate('/users');
        }
    }

    return(
        <div className="container">
            <form >
                <div className="inp-field">
                    <Input value={user.name} onChange={(e) => onChangeHandler(e.target.value, 'name')} placeholder="Type your name" variant="outlined" color="neutral" />
                </div>
                <div className="inp-field">
                    <Input value={user.pass} onChange={(e) => onChangeHandler(e.target.value, 'pass')} placeholder="Type your password" variant="outlined" color="neutral" />
                </div>
                <div className="inp-field">
                    <Input value={user.email} onChange={(e) => onChangeHandler(e.target.value, 'email')} placeholder="Type your email" variant="outlined" color="neutral" />
                </div>
                <div className="btn-submit">
                    <Button onClick={onLogin}>Submit</Button>
                </div>
            </form>

            {/* <a href="#">View all users</a> */}
        </div>
    )
}