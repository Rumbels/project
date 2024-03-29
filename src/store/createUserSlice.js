import { createSlice } from "@reduxjs/toolkit";



export const createUserSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpenCreateUser: false
    },

    reducers:{
        toggleOpenCreateModal: (state) => {
            state.isOpenCreateUser = !state.isOpenCreateUser;
        }
    }
})

export const {toggleOpenCreateModal} = createUserSlice.actions;
export const selectIsOpenCreateModal = (state) => state.modal.isOpenCreateUser;

export default createUserSlice.reducer;