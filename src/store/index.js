import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";
import uiSlice from "./slices/uiSlice";
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    auth: authReducer,
    ui: uiSlice.reducer,
  },
});