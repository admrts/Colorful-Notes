import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "./noteSlice";

const store = configureStore({
  reducer: {
    note: noteSliceReducer,
  },
});
export default store;
