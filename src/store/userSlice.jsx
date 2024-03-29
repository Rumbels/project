import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


export const userSlice = createSlice({
    name: "users",
    initialState: {
        data: JSON.parse(localStorage.getItem('users')) || [
            {
                id: uuidv4(),
                name: "John",
                pass: "12345",
                email: "john@mail.com"
            },
            {
                id: uuidv4(),
                name: "Dave",
                pass: "1234dsfsdf5",
                email: "dave@mail.com"
            },
            {
                id: uuidv4(),
                name: "Ann",
                pass: "12345",
                email: "ann@mail.com"
            },
            {
                id: uuidv4(),
                name: "Max",
                pass: "12345",
                email: "max@mail.com"
            },
        ]
    },
    reducers: {
        editUser: (state, action) => {
            let currentUserIdx = state.data.findIndex(user => user.id === action.payload.id);
            state.data[currentUserIdx] = action.payload; 
            localStorage.setItem('users', JSON.stringify(state.data));
        },

        addUser: (state, action) => {
            const newUser = {...action.payload, id: uuidv4() };
            state.data.push(newUser);
            localStorage.setItem('users', JSON.stringify([...state.data, newUser]));
        },

        removeUser: (state, action) => {
            state.data.splice(action.payload, 1);
            localStorage.setItem('users', JSON.stringify(state.data));
        }
        
    }
})

export const { editUser, addUser, removeUser } = userSlice.actions;
export const selectAllUsers = (state) => state.users.data;
export default userSlice.reducer;