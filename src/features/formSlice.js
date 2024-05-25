import emailjs from "@emailjs/browser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serviceID = "service_pvc4zid";
const templateID = "template_ci516wp";
const publicKey = "2lA4WKDLN-93ub3TU";

const initialState = {
  isLoading: false,
  isError: false,
};

export const sendingEmail = createAsyncThunk("form/sendingEmail", (args) => {
  return emailjs
    .sendForm(serviceID, templateID, args.formElement, publicKey)
    .then(
      () => {
        console.log("SUCCESS");
        args.navigate("/thanks");
      },
      (error) => {
        console.log("FAILED...", error.text);
        args.navigate("/form-error");
      }
    );
});

const form = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendingEmail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(sendingEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(sendingEmail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default form.reducer;
