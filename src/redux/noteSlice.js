import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  filteredNotes: [],
  color: "red",
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    saveNote: (state, action) => {
      const text = action.payload.text;
      const id = action.payload.id;
      state.notes.push({ text, id, color: state.color });
      state.filteredNotes = state.notes;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => {
        return id !== note.id;
      });
      state.filteredNotes = state.notes;
    },
    filterNotes: (state, action) => {
      const searchText = action.payload;
      if (searchText !== "") {
        state.filteredNotes = state.notes.filter((note) => {
          return note.text.includes(searchText);
        });
      } else {
        state.filteredNotes = state.notes;
      }
    },
  },
});

export const {
  saveNote,
  changeColor,
  changeSearchText,
  filterNotes,
  deleteNote,
} = noteSlice.actions;
export default noteSlice.reducer;
