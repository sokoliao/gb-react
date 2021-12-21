import { createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  isChecked: boolean;
}

const initialState: ProfileState = {
  isChecked: true
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleCheckBox: (state) => {
      state.isChecked = !state.isChecked;
    },
  }
});

export const { toggleCheckBox } = profileSlice.actions;
