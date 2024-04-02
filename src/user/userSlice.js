import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        }
    }
})

//This is exported to the store 
export const userReducer = userSlice.reducer

//This is used to dispatch the action 
export const { setCurrentUser } = userSlice.actions

//This is used to select the current user 
export const selectCurrentUser = (state => state.user.currentUser)