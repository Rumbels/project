import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

import "./User.css";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { CreateUserModal } from "../../components/CreateUserModal/CreateUserModal";
import { useDispatch, useSelector } from "react-redux";
import { editUser, selectAllUsers } from "../../store/userSlice";
import { selectIsOpenCreateModal, toggleOpenCreateModal } from "../../store/createUserSlice";

export default function User() {
  const data = useSelector(selectAllUsers);
  const [user, setUser] = useState({});
  const [editableUser, setEditableUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const isOpen = useSelector(selectIsOpenCreateModal);
  const { userId } = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    setUser(data.find(obj => obj.id === userId));
  }, [userId])

  const onEditMode = () => {
    setEditableUser(user);
    setEditMode(true);
  }

  const onSave = () => {
    dispatch(editUser(editableUser));
    setEditMode(false);
    setUser(editableUser);
  }

  const onChangeHandler = (value, prop) => {
    setEditableUser({...editableUser, [prop]: value })
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {editMode ? (
            <tr>
              <td>1</td>
              <td>
                <Input
                value={editableUser.name}
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
              </td>
              <td>
                <Input
                value={editableUser.pass}
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
              </td>
              <td>
                <Input
                value={editableUser.email}
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
              </td>
              <td className="btns-group">
                <Button onClick={onSave} size="sm" color="success" >Save</Button>
                <Button onClick={() => setEditMode(false)} size="sm" color="danger">X</Button>
              </td>
            </tr>
          ) : (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.pass}</td>
              <td>{user.email}</td>
              <td><button onClick={onEditMode} className="edit-btn">Edit User</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="nav-block">
        <button onClick={() => dispatch(toggleOpenCreateModal())}>Create a new User</button>
        <button><Link to="/users">View all User</Link></button>
      </div>
      {isOpen && <CreateUserModal />}
    </div>
  );
}
