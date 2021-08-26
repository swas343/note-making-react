import { createSlice } from '@reduxjs/toolkit';

let notes = localStorage.getItem('notes') || JSON.stringify({'notes':[]});
if(notes.length>0){
    notes = JSON.parse(notes);
}
const notesInitialState = notes;

const notesSlice = createSlice({
    name:'notes',
    initialState:notesInitialState,
    reducers:{
        addNote(state, action){
            state.notes.push({
                id:action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                tags: action.payload.tags
            })
            // this shouldn't be here i know
            localStorage.setItem('notes',JSON.stringify(state));
        }
    }
});

export const noteActions = notesSlice.actions;

export default notesSlice.reducer;