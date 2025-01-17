import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: undefined,
};

export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotesFromApi: (state, action) => {
      state.list = action.payload;
    },
    addNoteFromUser: (state, action) => {
      state.list.push(action.payload);
    },
    editNote: (state, action) => {
      const noteToEditIndex = state.list.findIndex((note) => note.id === action.payload.id);

      state.list[noteToEditIndex] = action.payload;
    },
  },
});

export function getNotesFromAPI(action) {
  return function (dispatch, getState) {
    fetch("/data/notes.json")
      .then((res) => res.json())
      .then((data) => dispatch(addNotesFromApi(data.notes)));
  };
}

export const { addNotesFromApi, addNoteFromUser, editNote } = notes.actions;
export default notes.reducer;
