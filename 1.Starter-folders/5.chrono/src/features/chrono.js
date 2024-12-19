import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "Work",
  },
};

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateChronoValues: (state, action) => {
      const chosenState = state[action.payload.type];

      // On bloque en dessous de 1
      if (chosenState.value + action.payload.value === 0) return;

      if (action.payload.type === "session") {
        if (!state.isPlaying) {
          chosenState.value = chosenState.value + action.payload.value;
          chosenState.runningValue = chosenState.value + action.payload.value;
          state.displayedValue.value = chosenState.value;
        } else {
          chosenState.value = chosenState.value + action.payload.value;
        }
      } else if (action.payload.type === "pause") {
        chosenState.value = chosenState.value + action.payload.value;
      }
    },
  },
});

export const { updateChronoValues } = chrono.actions;
export default chrono.reducer;
