import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: null,
	token: null,
	id: null,
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
		state.email =action.payload.email
    state.token =action.payload.token
    state.id=action.payload.id
	state.isAuth =true
		},
		removeUser(state) {
      state.email=null
      state.token=null
      state.id=null
	  state.isAuth =false
		},
	},
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
