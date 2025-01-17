import { useDispatch, useSelector } from 'react-redux';
import './RemoveUserModal.css';
import { removeUser, selectAllUsers } from '../../store/userSlice';


export default function RemoveUserModal({userId, setIsOpen}) {

    const data = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const onDeleteUser = () => {
        const idx = data.findIndex(user => user.Id === userId);
        dispatch(removeUser(idx));
        setIsOpen(false)
    }

    return(
        <div className="modal">
            <div className="modal-content">
                <i onClick={() => setIsOpen(false)} className="close">X</i>
                <h1>Remove User</h1>

                <div className="btns">
                    <button onClick={onDeleteUser} className='accept'>Yes, remove</button>
                    <button onClick={() => setIsOpen(false)} className='reject'>No</button>
                </div>
            </div>
        </div>
    )
}