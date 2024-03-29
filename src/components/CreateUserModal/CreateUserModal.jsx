import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import "./CreateUserModal";
import { useDispatch } from 'react-redux';
import { toggleButtonGroupClasses } from '@mui/joy';
import { useState } from 'react';
import { addUser } from '../../store/userSlice';
import { toggleOpenCreateModal } from '../../store/createUserSlice';

export function CreateUserModal () {

  const [user, setUser] = useState({});
  const dispatch = useDispatch();
   
  const onChangeHandler = (value, prop) => {
    setUser({...user, [prop]:value})
  }

  const onAddUser = () => {

    if (!user.email || !user.name || !user.pass || !validEmail(user.email)) {
      alert("проверьте электронную почту");
      return
    }

    dispatch(addUser(user));
    dispatch(toggleOpenCreateModal());
  }

  const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleClose = () => {
    dispatch(toggleOpenCreateModal());
  };

  return (
    <div className="modal">
      <div className='modal-content'>
        <i onClick={handleClose} className='close'>X</i>
        <div className="input-group">
          <label>Name</label>
          <Input
            value={user.name}
            onChange={(e) => onChangeHandler(e.target.value, 'name')}
            placeholder="Type in here…"
            variant="soft"
            sx={{
              "--Input-radius": "0px",
              borderBottom: "2px solid",
              borderColor: "neutral.outlinedBorder",
              "&:hover": {
                borderColor: "neutral.outlinedHoverBorder",
              },
              "&::before": {
                border: "1px solid var(--Input-focusedHighlight)",
                transform: "scaleX(0)",
                left: 0,
                right: 0,
                bottom: "-2px",
                top: "unset",
                transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                borderRadius: 0,
              },
              "&:focus-within::before": {
                transform: "scaleX(1)",
              },
            }}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <Input
            value={user.pass}
            onChange={(e) => onChangeHandler(e.target.value, 'pass')}
            placeholder="Type in here…"
            variant="soft"
            sx={{
              "--Input-radius": "0px",
              borderBottom: "2px solid",
              borderColor: "neutral.outlinedBorder",
              "&:hover": {
                borderColor: "neutral.outlinedHoverBorder",
              },
              "&::before": {
                border: "1px solid var(--Input-focusedHighlight)",
                transform: "scaleX(0)",
                left: 0,
                right: 0,
                bottom: "-2px",
                top: "unset",
                transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                borderRadius: 0,
              },
              "&:focus-within::before": {
                transform: "scaleX(1)",
              },
            }}
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <Input
            value={user.email}
            onChange={(e) => onChangeHandler(e.target.value, 'email')}
            placeholder="Type in here…"
            variant="soft"
            sx={{
              "--Input-radius": "0px",
              borderBottom: "2px solid",
              borderColor: "neutral.outlinedBorder",
              "&:hover": {
                borderColor: "neutral.outlinedHoverBorder",
              },
              "&::before": {
                border: "1px solid var(--Input-focusedHighlight)",
                transform: "scaleX(0)",
                left: 0,
                right: 0,
                bottom: "-2px",
                top: "unset",
                transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                borderRadius: 0,
              },
              "&:focus-within::before": {
                transform: "scaleX(1)",
              },
            }}
          />
        </div>
        <div className="btn-sub">
            <Button onClick={onAddUser} size="sm" color="primary" disabled={!user.email || !user.name || !user.pass}>Save</Button>
        </div>
      </div>
      
    </div>
  );
}
