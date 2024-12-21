import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [
    {
      id: 1,
      value: "#00d2ff",
      position: 20,
    },
    {
      id: 2,
      value: "#ee9ca7",
      position: 50,
    },
  ],

  pickedColorId: 1,
  angle: 60,
};

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    updateColorValue: (state, action) => {
      const currentColor = state.colors.find((color) => color.id === action.payload.id);
      currentColor.value = action.payload.value;
    },
    AddColor: (state, action) => {
      if (state.colors.length === 5) return;

      state.colors.push({
        id: state.colors[state.colors.length - 1].id + 1,
        value: "#111111",
        position: 50,
      });
    },
    RemoveColor: (state, action) => {
      if (state.colors.length === 2) return;

      state.colors.pop();
    },
    updateAngle: (state, action) => {
      state.angle = action.payload;
    },
  },
});

export const { updateColorValue, AddColor, RemoveColor, updateAngle } = gradientSlice.actions;
export default gradientSlice.reducer;
