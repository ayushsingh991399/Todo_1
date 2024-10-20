import { createSlice , configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",isLoggendIn: false,
    },
    reducers: {
        login(state) { state.isLoggendIn = true;  
        },
          logout(state) { state.isLoggendIn = false;  
        },
    },
});
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
})

