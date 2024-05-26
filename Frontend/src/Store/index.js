import { createSlice , configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",isLoggendIn: false,
    },
    reducers: {
        login(state) { state.isLoggendIn = true;
            
        },

       
    },
});
export const authActions = createSlice.actions;
export const Store = () => {
  reducers = authSlice.reducers;
}

