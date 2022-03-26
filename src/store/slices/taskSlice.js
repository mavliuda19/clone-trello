import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
	name: 'tasks',
	initialState: [],
	reducers: {
		addTask(state, action) {
			state.push({
				task: action.payload.task,
				id: action.payload.id,
				todos: [],
			})
		},
		addItem(state, action) {
			const { data, id } = action.payload
			state.map((el) => {
				if (el.id === id) {
					el.todos.push({
						item: data.item,
						id: data.id,
					})
				}
			})
		},
	},
})

export const taskSliceActions = taskSlice.actions
export default taskSlice
