// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './notes';

const store = configureStore({
    reducer: {notes:notesSlice}
})

export default store;