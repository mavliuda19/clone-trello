import { createSlice } from "@reduxjs/toolkit";

const initState = {modalIsVisible:false}
const uiSlice = createSlice({
    name: 'ui',
    initialState: initState,
    reducers:{
        toogle(state){
            state.modalIsVisible = true
        },
        cancel(state){
            state.modalIsVisible=false
        }
    }
})

export const uiSliceActions = uiSlice.actions
export default uiSlice