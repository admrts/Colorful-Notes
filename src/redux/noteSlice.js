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
      const text = action.payload;
      state.notes.push({ text: text, color: state.color });
      state.filteredNotes = state.notes;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
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

export const { saveNote, changeColor, changeSearchText, filterNotes } =
  noteSlice.actions;
export default noteSlice.reducer;
