import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./notesService";

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = noteSlice.reducer;

export default noteSlice.reducer;
